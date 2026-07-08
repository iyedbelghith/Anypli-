<?php




use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Client\IndexClientController;
use App\Http\Controllers\Api\Client\StoreClientController;
use App\Http\Controllers\Api\Client\ShowClientController;
use App\Http\Controllers\Api\Client\UpdateClientController;
use App\Http\Controllers\Api\Client\DeleteClientController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/clients', IndexClientController::class);
Route::post('/clients', StoreClientController::class);
Route::get('/clients/{client}', ShowClientController::class);
Route::put('/clients/{client}', UpdateClientController::class);
Route::delete('/clients/{client}', DeleteClientController::class);
