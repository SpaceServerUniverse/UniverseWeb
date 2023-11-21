<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Services\UniverseBaseServices\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SearchController extends Controller
{

    public function __construct(private readonly UserService $userService) {
    }

    public function index(Request $request): Response {
        $pagination = $this->userService->getUserPagination($request);
        return Inertia::render("Search/Index", compact("pagination"));
    }

    public function result($search): Response {
        $pagination = $this->userService->getSearchUserPagination($search);
        return Inertia::render('Search/Index', compact("pagination", "search"));
    }
}
