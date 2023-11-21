<?php

namespace App\Repositories\UniverseBaseRepositories\Position;

use App\Models\UniverseBaseModels\Position\UserPosition;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class UserPositionRepository{

    public function getUserPosition($user_id): Model|Builder|null {
        return UserPosition::query()->where("user_id", $user_id)->first();
    }
}
