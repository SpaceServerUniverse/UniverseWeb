<?php

namespace App\Services;

use App\Exceptions\ProfileCanNotCreateException;
use App\Exceptions\ProfileCanNotUpdateException;
use App\Repositories\ProfileRepository;

class ProfileService {

    public function __construct(
        private ProfileRepository $profileRepository
    ) {
    }

    public function create(int $user_id): bool {
        try {
            $this->profileRepository->create($user_id);
        } catch (ProfileCanNotCreateException $exception){
            logs()->error($exception);
            return false;
        }
        return true;
    }

    public function get(int $user_id){
        return $this->profileRepository->get($user_id);
    }

    public function update(int $user_id, $validated): bool {
        try {
            $this->profileRepository->update($user_id, $validated);
        } catch (ProfileCanNotUpdateException $exception){
            logs()->error($exception);
            return false;
        }
        return true;

    }

    public function existsFromUserId(int $user_id): bool {
        return $this->profileRepository->existsFromUserId($user_id);
    }
}
