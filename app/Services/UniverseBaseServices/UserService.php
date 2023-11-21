<?php

namespace App\Services\UniverseBaseServices;

use App\Repositories\UniverseBaseRepositories\UserRepository;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class UserService {

    public function __construct(private readonly UserRepository $userRepository) {
    }

    public function getAuthUser(): Model|Collection|Builder|array|null {
        return $this->userRepository->getAuthUser();
    }

    public function getUserFromName($name): Model|Builder|null {
        return $this->userRepository->getUserFromName($name);
    }

    public function getUserPagination(Request $request): LengthAwarePaginator {
        return $this->userRepository->getUserPagination($request);
    }

    public function getSearchUserPagination($search): LengthAwarePaginator {
        return $this->userRepository->getSearchUserPagination($search);
    }

    public function getUserCount(): int {
        return $this->userRepository->getUserCount();
    }
}
