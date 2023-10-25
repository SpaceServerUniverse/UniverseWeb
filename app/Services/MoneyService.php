<?php

namespace App\Services;

use App\Repositories\MoneyRepository;

class MoneyService{

    public function __construct(private MoneyRepository $moneyRepository) {
    }

    public function getUserMoneyRank($user_id): int {
        return $this->moneyRepository->getUserMoneyRank($user_id);
    }
}
