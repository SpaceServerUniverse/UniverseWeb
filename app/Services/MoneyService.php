<?php

namespace App\Services;

use App\Repositories\MoneyRepository;
use Illuminate\Database\Eloquent\Collection;

class MoneyService{

    public function __construct(private MoneyRepository $moneyRepository) {
    }

    public function getUserMoneyRank($user_id): int {
        return $this->moneyRepository->getUserMoneyRank($user_id);
    }

    public function getMoneyRank(int $limit): Collection|array {
        return $this->moneyRepository->getMoneyRank($limit);
    }
}
