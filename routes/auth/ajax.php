<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::prefix("search")->namespace("search")->name("search.")->group(function () {
        Route::post('/ajax-get-users-pagination', [App\Http\Controllers\Search\AjaxController::class, 'ajaxGetUsersPagination'])->name("get-users-pagination");
    });

    Route::prefix("setting")->namespace("setting")->name("setting.")->group(function(){
       Route::post("/ajax-change-show-last-login", [\App\Http\Controllers\Setting\AjaxController::class, 'ajaxChangeShowLastLogin'])->name("change-show-last-login");
    });
});
