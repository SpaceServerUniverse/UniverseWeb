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

    public function getLifeRanking(string $column, int $limit){
        return User::select('users.id', 'users.name', 'users.uuid') // 必要なカラムを選択
        ->join('counts', 'users.id', '=', 'counts.user_id')
            ->join('life_counts', 'counts.id', '=', 'life_counts.count_id')
            ->selectRaw('SUM(life_counts.'.$column.') as '.$column) // 集約関数のカラムのみ選択
            ->groupBy('users.id', 'users.name', 'users.uuid') // 必要なカラムでグループ化
            ->orderBy($column, 'desc')
            ->limit($limit)
            ->get();
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
