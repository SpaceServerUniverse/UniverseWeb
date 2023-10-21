<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

class AjaxController extends Controller {

    public function __construct(private readonly UserService $userService) {
    }

    public function ajaxGetUsersPagination(Request $request): LengthAwarePaginator {
        return $this->userService->getUserPagination($request);
    }
}
