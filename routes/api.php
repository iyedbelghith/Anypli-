<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Client\IndexClientController;
use App\Http\Controllers\Api\Client\StoreClientController;
use App\Http\Controllers\Api\Client\ShowClientController;
use App\Http\Controllers\Api\Client\UpdateClientController;
use App\Http\Controllers\Api\Client\DeleteClientController;

use App\Http\Controllers\Api\Project\IndexProjectController;
use App\Http\Controllers\Api\Project\StoreProjectController;
use App\Http\Controllers\Api\Project\ShowProjectController;
use App\Http\Controllers\Api\Project\UpdateProjectController;
use App\Http\Controllers\Api\Project\DeleteProjectController;

use App\Http\Controllers\Api\Affectation\IndexAffectationController;
use App\Http\Controllers\Api\Affectation\StoreAffectationController;
use App\Http\Controllers\Api\Affectation\ShowAffectationController;
use App\Http\Controllers\Api\Affectation\UpdateAffectationController;
use App\Http\Controllers\Api\Affectation\DeleteAffectationController;

use App\Http\Controllers\Api\User\IndexUserController;
use App\Http\Controllers\Api\User\StoreUserController;
use App\Http\Controllers\Api\User\ShowUserController;
use App\Http\Controllers\Api\User\UpdateUserController;
use App\Http\Controllers\Api\User\DeleteUserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Clients
Route::get('/clients', IndexClientController::class);
Route::post('/clients', StoreClientController::class);
Route::get('/clients/{client}', ShowClientController::class);
Route::put('/clients/{client}', UpdateClientController::class);
Route::delete('/clients/{client}', DeleteClientController::class);


// Projects
Route::get('/projects', IndexProjectController::class);
Route::post('/projects', StoreProjectController::class);
Route::get('/projects/{project}', ShowProjectController::class);
Route::put('/projects/{project}', UpdateProjectController::class);
Route::delete('/projects/{project}', DeleteProjectController::class);


// Affectations
Route::get('/affectations', IndexAffectationController::class);
Route::post('/affectations', StoreAffectationController::class);
Route::get('/affectations/{affectation}', ShowAffectationController::class);
Route::put('/affectations/{affectation}', UpdateAffectationController::class);
Route::delete('/affectations/{affectation}', DeleteAffectationController::class);


// Users
Route::get('/users', IndexUserController::class);
Route::post('/users', StoreUserController::class);
Route::get('/users/{user}', ShowUserController::class);
Route::put('/users/{user}', UpdateUserController::class);
Route::delete('/users/{user}', DeleteUserController::class);
