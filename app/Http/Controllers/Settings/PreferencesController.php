<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\PreferencesUpdateRequest;
use App\Models\UserEnvironment;
use App\Models\UserOpenTo;
use App\Models\UserRoleLevel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PreferencesController extends Controller
{
    /**
     * Show the user's preferences settings page.
     */
    public function edit(Request $request): Response
    {
        $user = $request->user()->load(['openTo', 'roleLevels', 'environments']);

        return Inertia::render('settings/preferences', [
            'user' => [
                'profile_visibility' => $user->profile_visibility ?? 'private',
                'search_status' => $user->search_status,
                'hourly_rate' => $user->hourly_rate,
                'available_to_start_on' => $user->available_to_start_on?->format('Y-m-d'),
                'open_to' => $user->openTo->pluck('value')->toArray(),
                'role_levels' => $user->roleLevels->pluck('value')->toArray(),
                'environments' => $user->environments->pluck('value')->toArray(),
            ],
        ]);
    }

    /**
     * Update the user's preferences settings.
     */
    public function update(PreferencesUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        $validated = $request->validated();

        $openTo = $validated['open_to'] ?? [];
        $roleLevels = $validated['role_levels'] ?? [];
        $environments = $validated['environments'] ?? [];

        unset($validated['open_to'], $validated['role_levels'], $validated['environments']);

        $user->fill($validated);
        $user->save();

        // Sync open_to
        $user->openTo()->delete();
        foreach ($openTo as $value) {
            UserOpenTo::create([
                'user_id' => $user->id,
                'value' => $value,
            ]);
        }

        // Sync role_levels
        $user->roleLevels()->delete();
        foreach ($roleLevels as $value) {
            UserRoleLevel::create([
                'user_id' => $user->id,
                'value' => $value,
            ]);
        }

        // Sync environments
        $user->environments()->delete();
        foreach ($environments as $value) {
            UserEnvironment::create([
                'user_id' => $user->id,
                'value' => $value,
            ]);
        }

        return to_route('preferences.edit');
    }
}
