<?php

namespace App\Repositories;

use App\Models\Money;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class MoneyRepository{
    public function getUserMoneyRank($user_id): int {
        $rankings = Money::query()->select('user_id', DB::raw('SUM(money) as total_money'))
            ->groupBy('user_id')
            ->orderByDesc('total_money')
            ->pluck('user_id')
            ->search($user_id);

        if($rankings === false){
            return 0;
        }
        return (int)$rankings + 1;
    }

    public function getMoneyRank(int $limit): Collection|array {
        return Money::query()->with('user')->limit(10)->orderByDesc("money")->get();
    }
}
