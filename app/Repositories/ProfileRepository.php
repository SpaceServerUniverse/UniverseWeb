<?php

namespace App\Repositories;

use App\Exceptions\ProfileCanNotCreateException;
use App\Exceptions\ProfileCanNotUpdateException;
use App\Models\Profile;

class ProfileRepository {

    /**
     * @throws ProfileCanNotCreateException
     */
    public function create(int $user_id): void {
        $profile = new Profile();
        $profile->user_id = $user_id;
        $result = $profile->save();
        if (!$result) {
            throw new ProfileCanNotCreateException("正常に作成できませんでした。");
        }
    }

    public function get(int $user_id) {
        return Profile::query()->with('user')->where("user_id", $user_id)->first();
    }

    /**
     * @throws ProfileCanNotUpdateException
     */
    public function update(int $user_id, $validated): void {
        $profile = Profile::query()->where("user_id", $user_id)->first();
        if(!isset($profile)){
            try {
                $this->create($user_id);
            } catch (ProfileCanNotCreateException $e) {
                throw new ProfileCanNotUpdateException($e->getMessage());
            }
        }

        $profile->fill($validated);
        $result = $profile->update();
        if(!$result){
            throw new ProfileCanNotUpdateException("正常に保存できませんでした。");
        }
    }

    public function existsFromUserId(int $user_id): bool {
        $profile = Profile::query()->where("user_id", $user_id)->first();
        return isset($profile);
    }
}
