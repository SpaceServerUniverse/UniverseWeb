<?php

namespace App\Models\Level;

use App\Models\UniverseBaseModel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class PlayerNormalLevel extends UniverseBaseModel {
    use HasFactory;

    public function user():HasOne{
        return $this->hasOne(User::class, "id", "user_id");
    }
}
