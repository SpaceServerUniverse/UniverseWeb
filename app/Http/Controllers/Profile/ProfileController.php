<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProfileRequest;
use App\Services\ProfileService;
use App\Services\UniverseBaseServices\Count\CountService;
use App\Services\UniverseBaseServices\Count\KillDeathCountService;
use App\Services\UniverseBaseServices\Level\PlayerLevelService;
use App\Services\UniverseBaseServices\MoneyService;
use App\Services\UniverseBaseServices\UserService;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller {

    public function __construct(
        private readonly ProfileService $profileService,
    ) {
    }

    public function show(
        $name,
        UserService $userService,
        MoneyService $moneyService,
        PlayerLevelService $playerLevelService,
    ): Response {
        $user = $userService->getUserFromName($name);
        if($user != null){
            $money_rank = $moneyService->getUserMoneyRank($user->id);
            $level_rank = $playerLevelService->getLevelModeService($user->id)->getUserLevelRank($user->id);
            return Inertia::render("Profile/Show", compact("user", "money_rank", "level_rank", "name"));
        }
        return Inertia::render("Profile/Show", compact("user", "name"));
    }

    public function update(UpdateProfileRequest $request): Application|Redirector|RedirectResponse|\Illuminate\Contracts\Foundation\Application {
        $user_id = Auth::id();
        $result = $this->profileService->update($user_id, $request->validated());
        if (!$result) {
            return redirect(route("auth.setting.index"))->with("message_error", "エラーが発生しました。管理者に報告してください。");
        }
        return redirect(route("auth.setting.index"))->with("message_success", "変更しました！");
    }
}

