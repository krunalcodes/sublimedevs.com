<?php

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PreferencesUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $openToOptions = [
            'part-time-freelance',
            'full-time-freelance',
            'part-time-employment',
            'full-time-employment',
            'mentoring',
            'collaboration',
            'contract',
        ];

        $roleLevelOptions = [
            'junior',
            'mid',
            'senior',
            'lead',
            'staff',
            'manager',
            'c-level',
        ];

        $environmentOptions = [
            'office',
            'hybrid',
            'remote',
        ];

        return [
            'profile_visibility' => ['required', Rule::in(['public', 'private'])],
            'search_status' => ['nullable', Rule::in(['open', 'not-available', 'invisible'])],
            'hourly_rate' => ['nullable', 'numeric', 'min:0', 'max:999999.99'],
            'available_to_start_on' => ['nullable', 'date'],
            'open_to' => ['nullable', 'array'],
            'open_to.*' => [Rule::in($openToOptions)],
            'role_levels' => ['nullable', 'array'],
            'role_levels.*' => [Rule::in($roleLevelOptions)],
            'environments' => ['nullable', 'array'],
            'environments.*' => [Rule::in($environmentOptions)],
        ];
    }
}
