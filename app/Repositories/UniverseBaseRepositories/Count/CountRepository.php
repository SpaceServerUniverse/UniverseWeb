<?php

namespace App\Repositories\UniverseBaseRepositories\Count;

use App\Exceptions\CountNotFoundException;
use App\Models\UniverseBaseModels\Count\Count;

class CountRepository{

    /**
     * @throws CountNotFoundException
     */
    public function getCountIdFromUserId($user_id){
        $count = Count::query()->where("user_id", $user_id)->first();
        if(!isset($count)){
            throw new CountNotFoundException("存在しませんでした。");
        }
        return $count->id;
    }

}
