<?php

namespace App\Http\Controllers;

use App\Services\UniverseBaseServices\Level\PlayerLevelService;
use App\Services\UniverseBaseServices\MoneyService;
use App\Services\UniverseBaseServices\UserService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller {

    public function __construct(
        private readonly UserService $userService,
        private readonly MoneyService $moneyService,
        private readonly PlayerLevelService $playerLevelService
    ) {
    }

    public function index(): Response {
        $user = $this->userService->getAuthUser();
        $money_rank = $this->moneyService->getUserMoneyRank(Auth::id());
        $level_rank = $this->playerLevelService->getLevelModeService(Auth::id())->getUserLevelRank(Auth::id());
        return Inertia::render('Home', compact(
            "user",
            "money_rank",
            "level_rank"
        ));
    }
}
