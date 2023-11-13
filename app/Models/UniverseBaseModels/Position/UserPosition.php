<?php

namespace App\Models\UniverseBaseModels\Position;

use App\Models\UniverseBaseModels\UniverseBaseModel;
use App\Models\UniverseBaseModels\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class UserPosition extends UniverseBaseModel
{
    use HasFactory;

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
    public function position(): HasOne {
        return $this->hasOne(Position::class, "id", "position_id");
    }
}
