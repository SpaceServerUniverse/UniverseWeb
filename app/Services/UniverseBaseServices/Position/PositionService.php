<?php

namespace App\Services\UniverseBaseServices\Position;

use App\Repositories\UniverseBaseRepositories\Position\PositionRepository;

class PositionService{
    public function __construct(private PositionRepository $positionRepository) {
    }

    public function getPositionName($position_id){
        return $this->positionRepository->getPositionName($position_id);
    }
}
