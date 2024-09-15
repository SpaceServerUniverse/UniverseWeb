<?php

namespace App\Models\UniverseBaseModels;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Profile;
use App\Models\UniverseBaseModels\Count\Count;
use App\Models\UniverseBaseModels\Level\PlayerLevel;
use App\Models\UniverseBaseModels\Position\UserPosition;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $connection = 'universe';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'password' => 'hashed',
    ];

    public function profile(): HasOne {
        return $this->hasOne(Profile::class, "user_id");
    }

    public function money(): HasOne {
        return $this->hasOne(Money::class, "user_id");
    }

    public function player_level(): HasOne {
        return $this->hasOne(PlayerLevel::class, "user_id");
    }

    public function user_position():hasOne{
        return $this->hasOne(UserPosition::class, 'user_id');
    }

    public function count():hasOne{
        return $this->hasOne(Count::class, "user_id");
    }

    public function custom_name():hasOne{
        return $this->hasOne(CustomName::class, "user_id");
    }
}
