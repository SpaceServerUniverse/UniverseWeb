<?php

namespace App\Services\UniverseBaseServices\Count;

use App\Models\UniverseBaseModels\Count\KillDeathCount;
use App\Repositories\UniverseBaseRepositories\Count\KillDeathCountRepository;
use Illuminate\Database\Eloquent\Collection;

class KillDeathCountService {

    public function __construct(private readonly KillDeathCountRepository $killDeathCountRepository) {
    }

    public function getUserPlayerKillRank($count_id): int {
        return $this->killDeathCountRepository->getUserRank($count_id, "player_kill");
    }

    public function getUserMobKillRank($count_id): int {
        return $this->killDeathCountRepository->getUserRank($count_id, "mob_kill");
    }

    public function getUserEnderDragonKillRank($count_id): int {
        return $this->killDeathCountRepository->getUserRank($count_id, "ender_dragon_kill");
    }

    public function getUserWitherKillRank($count_id): int {
        return $this->killDeathCountRepository->getUserRank($count_id, "wither_kill");
    }

    public function getUserDeathRank($count_id): int {
        return $this->killDeathCountRepository->getUserRank($count_id, "death");
    }

    public function getUserKillDeathAllRanks($count_id){
    }

    public function getPlayerKillRank($limit = 10): Collection|array {
        return $this->killDeathCountRepository->getRanking("player_kill", $limit);
    }

    public function getMobKillRank($limit = 10): Collection|array {
        return $this->killDeathCountRepository->getRanking("mob_kill", $limit);
    }

    public function getEnderDragonKillRank($limit = 10): Collection|array {
        return $this->killDeathCountRepository->getRanking("ender_dragon_kill", $limit);
    }

    public function getWitherKillRank($limit = 10): Collection|array {
        return $this->killDeathCountRepository->getRanking("wither_kill", $limit);
    }

    public function getDeathRank($limit = 10): Collection|array {
        return $this->killDeathCountRepository->getRanking("death", $limit);
    }
}
