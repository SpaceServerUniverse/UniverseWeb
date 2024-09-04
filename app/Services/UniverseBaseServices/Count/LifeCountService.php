<?php
namespace App\Services\UniverseBaseServices\Count;

use App\Repositories\UniverseBaseRepositories\Count\LifeCountRepository;

class LifeCountService{
    public function __construct(private LifeCountRepository $lifeCountRepository) {
    }

    public function getBrockBreakRank($limit = 10){
        return $this->lifeCountRepository->getRanking("block_break", $limit);
    }


}
