<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller {

    public function __construct(private readonly UserService $userService) {
    }

    public function index(): Response {
        return Inertia::render('Home', [
            'user' => $this->userService->getAuthUser()
        ]);
    }
}
