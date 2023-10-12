<?php
namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class UserRepository{

    public function getUserWithMoneyAndLevel(): Model|Collection|Builder|array|null {
        return User::query()->with(['money', 'player_level.player_level_mode_relation'])->find(Auth::id());
    }
}
