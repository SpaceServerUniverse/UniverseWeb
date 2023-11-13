<?php

namespace App\Models\UniverseBaseModels\Level;

use App\Models\UniverseBaseModels\UniverseBaseModel;
use App\Models\UniverseBaseModels\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PlayerNormalLevel extends UniverseBaseModel {
    use HasFactory;

    public function user():belongsTo{
        return $this->belongsTo(User::class, "user_id", "id");
    }
}
