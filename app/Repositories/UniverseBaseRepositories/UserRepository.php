<?php
namespace App\Repositories\UniverseBaseRepositories;

use App\Models\UniverseBaseModels\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserRepository{

    public function getAuthUser(): Model|Collection|Builder|array|null {
        return User::query()->with(
            [
                'money',
                'player_level.player_level_mode_relation',
                'user_position.position',
                'profile',
                'count.kill_death_count',
                'count.life_count',
                'count.ore_count',
                'count.player_count'
            ]
        )->find(Auth::id());
    }

    public function getUserFromName($name): Model|Builder|null {
        return User::query()->with(
            [
                'money',
                'player_level.player_level_mode_relation',
                'user_position.position',
                'profile',
                'count.kill_death_count',
                'count.life_count',
                'count.ore_count',
                'count.player_count'
            ]
        )->where("name", $name)->first();
    }

    public function getUserPagination(Request $request): LengthAwarePaginator {
        $search = $request->input("search");
        return User::query()->with(['player_level.player_level_mode_relation'])->where("name", "LIKE", "%$search%")->paginate(12);
    }

    public function getSearchUserPagination($search): LengthAwarePaginator {
        return User::query()->where('name',"LIKE", "%$search%")->paginate(12);
    }

    public function getUserCount(): int {
        return User::query()->count();
    }
}
