<?php

use App\Http\Controllers\Search\AjaxController;
use App\Http\Controllers\Search\SearchController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::prefix("search")->namespace("search")->name("search.")->group(function () {
        Route::post('/ajax-get-users-pagination', [AjaxController::class, 'ajaxGetUsersPagination'])->name("get-users-pagination");
    });
});
