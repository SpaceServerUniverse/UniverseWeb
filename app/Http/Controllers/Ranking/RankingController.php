<?php

namespace App\Http\Controllers\Ranking;

use App\Http\Controllers\Controller;
use App\Repositories\UniverseBaseRepositories\Count\LifeCountRepository;
use App\Services\UniverseBaseServices\Count\LifeCountService;
use App\Services\UniverseBaseServices\Level\PlayerNormalLevelService;
use App\Services\UniverseBaseServices\MoneyService;
use App\Services\UniverseBaseServices\UserService;
use Inertia\Inertia;
use Inertia\Response;

class RankingController extends Controller
{

    public function __construct(
        private MoneyService $moneyService,
        private PlayerNormalLevelService $playerNormalLevelService,
        private UserService $userService
    ) {
    }

    public function index(): Response {
        return Inertia::render("Ranking/Index");
    }

    public function money(): Response {
        $ranking = $this->moneyService->getMoneyRank(10);
        $rank_name = "お金";
        return Inertia::render("Ranking/Show", compact("rank_name", "ranking"));
    }

    public function normal_level(): Response {
        $ranking = $this->playerNormalLevelService->getLevelRank(10);
        $rank_name = "ノーマルレベル";
        return Inertia::render("Ranking/Show", compact("rank_name", "ranking"));
    }

    public function brock_break():Response{
        $ranking = $this->userService->getLifeRanking("block_break",10);
        $rank_name = "ブロック採掘数";
        return Inertia::render("Ranking/Show", compact("rank_name", "ranking"));
    }
}
