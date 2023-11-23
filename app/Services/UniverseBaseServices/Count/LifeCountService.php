<?php
namespace App\Services\UniverseBaseServices\Count;

use App\Repositories\UniverseBaseRepositories\Count\LifeCountRepository;

class LifeCountService{
    public function __construct(private LifeCountRepository $lifeCountRepository) {
    }


}
