<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller {

    public function __construct(private readonly UserService $userService) {
    }

    public function index(): Response {
        return Inertia::render('Home', [
            'user' => $this->userService->getUserWithMoneyAndLevel()
        ]);
    }
}
