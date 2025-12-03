<?php

namespace App\Http\Requests\Settings;

use App\Models\Country;
use App\Models\Language;
use App\Models\Timezone;
use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],

            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->id),
            ],

            'summary' => ['required', 'string', 'max:500'],
            'bio' => ['required', 'string', 'max:5000'],
            'avatar' => ['nullable', 'image', 'max:2048', 'mimes:jpeg,jpg,png,gif'],
            'city' => ['nullable', 'string', 'max:255'],
            'country_id' => ['required', 'integer', Rule::exists(Country::class, 'id')],
            'timezone_id' => ['nullable', 'integer', Rule::exists(Timezone::class, 'id')],
            'languages' => ['nullable', 'array'],
            'languages.*' => ['integer', Rule::exists(Language::class, 'id')],
        ];
    }
}
