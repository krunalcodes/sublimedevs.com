<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'google_id',
        'avatar',
        'summary',
        'bio',
        'city',
        'country_id',
        'timezone_id',
        'profile_visibility',
        'search_status',
        'hourly_rate',
        'available_to_start_on',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
            'available_to_start_on' => 'date',
            'hourly_rate' => 'decimal:2',
        ];
    }

    /**
     * Get the country that the user belongs to.
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Get the timezone that the user belongs to.
     */
    public function timezone()
    {
        return $this->belongsTo(Timezone::class);
    }

    /**
     * Get the languages that the user knows.
     */
    public function languages()
    {
        return $this->belongsToMany(Language::class, 'user_languages');
    }

    /**
     * Get the open to preferences for the user.
     */
    public function openTo()
    {
        return $this->hasMany(UserOpenTo::class);
    }

    /**
     * Get the role levels for the user.
     */
    public function roleLevels()
    {
        return $this->hasMany(UserRoleLevel::class);
    }

    /**
     * Get the environments for the user.
     */
    public function environments()
    {
        return $this->hasMany(UserEnvironment::class);
    }

    /**
     * Get the avatar URL attribute.
     */
    protected function avatar(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                if (! $value) {
                    return null;
                }

                // If it's already a full URL (from Google), return as is
                if (filter_var($value, FILTER_VALIDATE_URL)) {
                    return $value;
                }

                // Otherwise, return the storage URL
                return Storage::disk('public')->url($value);
            }
        );
    }
}
