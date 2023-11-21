<?php

namespace App\Repositories\UniverseBaseRepositories\Level;

use App\Models\UniverseBaseModels\Level\PlayerLevel;

class PlayerLevelRepository {

    public function getUserLevelMode($user_id) {
        $player_level = PlayerLevel::query()->find($user_id, "user_id");
        return $player_level?->getLevelMode();
    }
}
