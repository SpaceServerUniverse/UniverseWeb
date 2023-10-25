<?php

namespace App\Http\Controllers\Ranking;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class RankingController extends Controller
{
    public function index(){
        return Inertia::render("Ranking/Index");
    }
}
