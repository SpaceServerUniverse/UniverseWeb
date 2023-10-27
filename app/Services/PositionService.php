<?php

namespace App\Services;

use App\Repositories\PositionRepository;

class PositionService{
    public function __construct(private PositionRepository $positionRepository) {
    }

    public function getPositionName($position_id){
        return $this->positionRepository->getPositionName($position_id);
    }
}
