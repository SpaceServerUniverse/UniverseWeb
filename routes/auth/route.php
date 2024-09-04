<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Ranking\RankingController;
use App\Http\Controllers\Search\SearchController;
use App\Http\Controllers\Setting\SettingController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function() {

    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::resource("profile", ProfileController::class, [
        "only" => ["show"]
    ]);

    Route::prefix("profile")->namespace("profile")->name("profile.")->group(function(){
        Route::patch("/update", [ProfileController::class, "update"])->name("update");
    });

    Route::resource("search", SearchController::class, [
        "only" => ["index"]
    ]);

    Route::prefix("search")->namespace("search")->name("search.")->group(function () {
       Route::get("/result/{search}", [SearchController::class, "result"])->name('result');
    });

    Route::resource("ranking", RankingController::class, [
        "only" => ["index"]
    ]);

    Route::prefix("ranking")->namespace("ranking")->name("ranking.")->group(function(){
       Route::get("/money", [RankingController::class, "money"])->name("money");
       Route::get("/normal_level", [RankingController::class, "normal_level"])->name("normal_level");
       Route::get("/block_break", [RankingController::class, "brock_break"])->name("block_break");
    });

    Route::resource("setting", SettingController::class, [
        "only" => ["index"]
    ]);
});
