<?php

namespace App\Http\Controllers;

use App\Services\ProfileService;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Response;

class SettingController extends Controller
{

    public function __construct(
        private ProfileService $profileService
    ) {
    }

    public function index(): Application|Redirector|Response|RedirectResponse|\Illuminate\Contracts\Foundation\Application {
        $user_id = Auth::id();

        if(!$this->profileService->existsFromUserId($user_id)){
            $result = $this->profileService->create($user_id);
            if(!$result){
                Session::flash('message_error',"プロフィールの作成でエラーが発生しました。管理者に報告してください。");
                return redirect(route("auth.home"));
            }
        }

        $profile = $this->profileService->get($user_id);

        return Inertia::render("Setting/Index", compact("profile"));
    }
}
