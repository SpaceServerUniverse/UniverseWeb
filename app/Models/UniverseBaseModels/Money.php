<?php

namespace App\Models\UniverseBaseModels;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Money extends UniverseBaseModel {
    use HasFactory;

    protected $fillable = [
        "money"
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class, 'user_id');
    }
}
