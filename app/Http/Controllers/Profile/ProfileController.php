<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Services\MoneyService;
use App\Services\PlayerLevelService;
use App\Services\UserService;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller {

    public function __construct(
        private readonly UserService        $userService,
        private readonly MoneyService       $moneyService,
        private readonly PlayerLevelService $playerLevelService
    ) {
    }

    public function show($name): Response {
        $user = $this->userService->getUserFromName($name);
        $money_rank = $this->moneyService->getUserMoneyRank($user->id);
        $level_rank = $this->playerLevelService->getLevelModeService($user->id)->getUserLevelRank($user->id);
        return Inertia::render("Profile/Show", compact("user", "money_rank", "level_rank", "name"));
    }
}
