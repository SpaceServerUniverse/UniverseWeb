<?php

namespace App\Models\UniverseBaseModels\Count;

use App\Models\UniverseBaseModels\UniverseBaseModel;
use App\Models\UniverseBaseModels\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Count extends UniverseBaseModel
{
    use HasFactory;

    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function kill_death_count():hasOne{
        return $this->hasOne(KillDeathCount::class, "count_id");
    }

    public function life_count():hasOne{
        return $this->hasOne(LifeCount::class, "count_id");
    }

    public function ore_count():hasOne{
        return $this->hasOne(OreCount::class, "count_id");
    }

    public function player_count():hasONe{
        return $this->hasOne(PlayerCount::class, "count_id");
    }

}
