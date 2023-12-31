<?php

namespace App\Services\UniverseBaseServices\Level;

use App\Interfaces\Services\PlayerLevelModeServiceInterface;
use App\Repositories\UniverseBaseRepositories\Level\PlayerNormalLevelRepository;
use Illuminate\Database\Eloquent\Collection;

class PlayerNormalLevelService implements PlayerLevelModeServiceInterface {

    public function __construct(
        private PlayerNormalLevelRepository $playerNormalLevelRepository
    ) {
    }

    public function getUserLevelRank($user_id): int {
        return $this->playerNormalLevelRepository->getUserLevelRank($user_id);
    }

    public function getLevelRank(int $limit): Collection|array {
        return $this->playerNormalLevelRepository->getLevelRank($limit);
    }

}
