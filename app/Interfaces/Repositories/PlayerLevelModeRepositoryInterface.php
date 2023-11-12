<?php

namespace App\Interfaces\Repositories;

use Illuminate\Database\Eloquent\Collection;

interface PlayerLevelModeRepositoryInterface{
    public function getUserLevelRank($user_id);
    public function getLevelRank(int $limit): Collection|array;
}
