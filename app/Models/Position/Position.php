<?php

namespace App\Models\Position;

use App\Models\UniverseBaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Position extends UniverseBaseModel {
    use HasFactory;

    const VALUE_BAN = 0;
    const VALUE_NORMAL = 1;
    const VALUE_VIP = 2;
    const VALUE_VIP_PLUS = 3;
    const VALUE_VIP_PLUS_PLUS = 4;

    const VALUE_STAFF = 100;
    const VALUE_DEVELOPER = 101;
    const VALUE_OWNER = 102;
}
