<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Search\SearchController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function() {

    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::resource("profile", ProfileController::class, [
        "only" => ["show"]
    ]);

    Route::resource("search", SearchController::class, [
        "only" => ["index"]
    ]);

    Route::prefix("search")->namespace("search")->name("search.")->group(function () {
       Route::get("/result/{search}", [SearchController::class, "result"])->name('result');
    });

});
