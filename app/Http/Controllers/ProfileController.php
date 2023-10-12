<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Services\UserService;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller {

    public function __construct(private readonly UserService $userService) {
    }

    public function show($name): Response {
        $user = $this->userService->getUserFromName($name);
        return Inertia::render("Profile/Show", compact("user"));
    }
}
