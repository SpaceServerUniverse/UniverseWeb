<?php

namespace App\Repositories\UniverseBaseRepositories\Count;

use App\Models\UniverseBaseModels\Count\KillDeathCount;
use Illuminate\Database\Eloquent\Collection;

class KillDeathCountRepository{

    public function getUserRank(int $count_id, string $column): int {
        $rankings = KillDeathCount::query()->select('count_id', $column)
            ->groupBy('count_id')
            ->orderByDesc($column)
            ->pluck('count_id')
            ->search($count_id);

        if($rankings === false) return 0;
        return (int)$rankings + 1;
    }

   public function getRanking(string $column, int $limit = 10): Collection|array {
        return KillDeathCount::query()->with('count.user')->limit($limit)->orderByDesc($column)->get();
   }
}
