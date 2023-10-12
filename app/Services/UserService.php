<?php

namespace App\Services;

use App\Repositories\UserRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class UserService {

    public function __construct(private readonly UserRepository $userRepository) {
    }

    public function getAuthUser(): Model|Collection|Builder|array|null {
        return $this->userRepository->getAuthUser();
    }

    public function getUserFromName($name): Model|Builder|null {
        return $this->userRepository->getUserFromName($name);
    }
}
