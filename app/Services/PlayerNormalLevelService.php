<?php

namespace App\Services;

use App\Interfaces\Services\PlayerLevelModeServiceInterface;
use App\Repositories\PlayerNormalLevelRepository;

class PlayerNormalLevelService implements PlayerLevelModeServiceInterface {

    public function __construct(
        private PlayerNormalLevelRepository $playerNormalLevelRepository
    ) {
    }

    public function getUserLevelRank($user_id): int {
        return $this->playerNormalLevelRepository->getUserLevelRank($user_id);
    }

}
