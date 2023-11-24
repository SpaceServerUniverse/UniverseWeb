<?php

namespace App\Models;

use App\Models\UniverseBaseModels\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = ["introduction" , "show_last_login"];

    protected $connection = 'mysql';

    public function user():belongsTo{
        return $this->belongsTo(User::class, "user_id", "id");
    }
}
