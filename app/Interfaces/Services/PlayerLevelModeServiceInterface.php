<?php

namespace App\Interfaces\Services;

use Illuminate\Database\Eloquent\Collection;

interface PlayerLevelModeServiceInterface{

    public function getUserLevelRank($user_id);

    public function getLevelRank(int $limit): Collection|array;
}
