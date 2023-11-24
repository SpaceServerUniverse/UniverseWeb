<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Services\ProfileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AjaxController extends Controller {

    public function __construct(private ProfileService $profileService) {}

    public function ajaxChangeShowLastLogin(Request $request){
        $this->profileService->update(Auth::id(), ["show_last_login" => $request->input("show_last_login")]);
        return redirect(route("auth.setting.index"));
    }
}
