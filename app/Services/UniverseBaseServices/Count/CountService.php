<?php

namespace App\Services\UniverseBaseServices\Count;

use App\Exceptions\CountNotFoundException;
use App\Repositories\UniverseBaseRepositories\Count\CountRepository;

class CountService{

    public function __construct(private readonly CountRepository $countRepository) {
    }

    public function getCountIdFromUserId($user_id) {
        try {
            return $this->countRepository->getCountIdFromUserId($user_id);
        } catch (CountNotFoundException $e) {
            logs()->error($e);
            return -1;
        }
    }

}
