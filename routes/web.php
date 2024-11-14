<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    // Customer routes
    Route::get('/burgers', function () {
        return Inertia::render('Customer/Burgers');
    })->name('burgers');

    Route::get('/orders', function () {
        return Inertia::render('Customer/Orders');
    })->name('orders');

    // Manager routes
    Route::middleware('role:manager')->group(function () {
        Route::get('/manage/orders', function () {
            return Inertia::render('Manager/OrderManagement');
        })->name('manage.orders');
    });

    // Super Admin routes
    Route::middleware('role:super_admin')->group(function () {
        Route::get('/manage/users', function () {
            return Inertia::render('Admin/UserManagement');
        })->name('manage.users');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
