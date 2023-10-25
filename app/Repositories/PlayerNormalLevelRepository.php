<?php

namespace App\Repositories;

use App\Interfaces\Repositories\PlayerLevelModeRepositoryInterface;
use App\Models\Level\PlayerNormalLevel;
use Illuminate\Support\Facades\DB;

class PlayerNormalLevelRepository implements PlayerLevelModeRepositoryInterface {

    public function getUserLevelRank($user_id): int {
        $rankings = PlayerNormalLevel::query()->select('user_id', DB::raw('SUM(level) as total_level'))
            ->groupBy('user_id')
            ->orderByDesc('total_level')
            ->pluck('user_id')
            ->search($user_id);

        if($rankings === false){
            return 0;
        }
        return (int)$rankings + 1;
    }
}
