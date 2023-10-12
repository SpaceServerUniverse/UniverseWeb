<?php

namespace App\Library\Level;

enum Level {
    case Normal;
    case Advance;
    case Expert;

    public static function getLevelModeToEnum(int $levelMode): Level {
        return match ($levelMode) {
            1 => self::Advance,
            2 => self::Expert,
            default => self::Normal,
        };
    }
}
