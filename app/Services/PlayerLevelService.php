<?php

namespace App\Services;

use App\Interfaces\Services\PlayerLevelModeServiceInterface;
use App\Repositories\PlayerLevelRepository;

class PlayerLevelService{

    public function __construct(
        private PlayerNormalLevelService $playerNormalLevelService,
        private PlayerLevelRepository $playerLevelRepository
    ) {
    }

    public function getLevelModeService($user_id): PlayerLevelModeServiceInterface{
        $level_mode = $this->playerLevelRepository->getUserLevelMode($user_id);
        return match ($level_mode){
            default => $this->playerNormalLevelService
        };
    }
}
