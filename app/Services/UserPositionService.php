<?php

namespace App\Services;

use App\Repositories\UserPositionRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class UserPositionService{

    public function __construct(private UserPositionRepository $userPositionRepository) {
    }

    public function getUserPosition($user_id): Model|Builder|null {
        return $this->userPositionRepository->getUserPosition($user_id);
    }
}
