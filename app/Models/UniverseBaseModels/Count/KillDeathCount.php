<?php

namespace App\Models\UniverseBaseModels\Count;

use App\Models\UniverseBaseModels\UniverseBaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KillDeathCount extends UniverseBaseModel {
    use HasFactory;

    public function count(): BelongsTo {
        return $this->belongsTo(Count::class);
    }
}
