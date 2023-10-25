<?php

namespace App\Models\Level;

use App\Library\Level\Level;
use App\Models\UniverseBaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class PlayerLevel extends UniverseBaseModel {
    use HasFactory;

    public function getLevelMode():Level{
        return Level::getLevelModeToEnum((int)$this->levelmode);
    }

    public function player_level_mode_relation(): hasOne {
        $level = $this->getLevelMode();
        return match ($level) {
            default => $this->player_normal_level()
        };
    }

    public function player_normal_level(): HasOne {
        return $this->hasOne(PlayerNormalLevel::class, 'user_id', 'user_id');
    }
}
