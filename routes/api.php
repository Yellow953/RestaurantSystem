<?php

use App\Http\Controllers\BurgerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    // Customer Routes
    Route::middleware('role:customer')->group(function () {
        Route::get('/burgers', [BurgerController::class, 'index']);
        Route::post('/orders', [OrderController::class, 'store']);
    });

    // Manager Routes
    Route::middleware('role:manager')->group(function () {
        Route::post('/burgers', [BurgerController::class, 'store']);
        Route::put('/burgers/{id}', [BurgerController::class, 'update']);
        Route::delete('/burgers/{id}', [BurgerController::class, 'destroy']);
        Route::get('/orders/pending', [OrderController::class, 'pending']);
        Route::post('/orders/{id}/approve', [OrderController::class, 'approve']);
    });

    // Super Admin Routes
    Route::middleware('role:super_admin')->group(function () {
        Route::get('/users', [UserController::class, 'index']);
        Route::post('/users/{id}/assign-role', [UserController::class, 'assignRole']);
    });
});
