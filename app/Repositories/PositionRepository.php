<?php

namespace App\Repositories;

use App\Models\UniverseBaseModels\Position\Position;

class PositionRepository {

    public function getPositionName($position_id){
        return Position::query()->find($position_id)->name;
    }
}
