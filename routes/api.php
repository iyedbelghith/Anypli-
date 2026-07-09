<?php


use app\Helpers\Http\Controllers\Api\Affectation\DeleteAffectationController;
use app\Helpers\Http\Controllers\Api\Affectation\IndexAffectationController;
use app\Helpers\Http\Controllers\Api\Affectation\ShowAffectationController;
use app\Helpers\Http\Controllers\Api\Affectation\StoreAffectationController;
use app\Helpers\Http\Controllers\Api\Affectation\UpdateAffectationController;
use app\Helpers\Http\Controllers\Api\client\IndexClientController;
use app\Helpers\Http\Controllers\Api\client\ShowClientController;
use app\Helpers\Http\Controllers\Api\User\DeleteUserController;
use app\Helpers\Http\Controllers\Api\User\IndexUserController;
use app\Helpers\Http\Controllers\Api\User\StoreUserController;
use app\Helpers\Http\Controllers\Api\User\UpdateUserController;
use app\Http\Controllers\Api\client\DeleteClientController;
use app\Http\Controllers\Api\client\StoreClientController;
use app\Http\Controllers\Api\client\UpdateClientController;
use app\Http\Controllers\Api\Project\DeleteProjectController;
use app\Http\Controllers\Api\Project\IndexProjectController;
use app\Http\Controllers\Api\Project\ShowProjectController;
use app\Http\Controllers\Api\Project\StoreProjectController;
use app\Http\Controllers\Api\Project\UpdateProjectController;
use app\Http\Controllers\Api\User\ShowUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/clients', IndexClientController::class);
Route::post('/clients', StoreClientController::class);
Route::get('/clients/{client}', ShowClientController::class);
Route::put('/clients/{client}', UpdateClientController::class);
Route::delete('/clients/{client}', DeleteClientController::class);



Route::get('/projects', IndexProjectController::class);
Route::post('/projects', StoreProjectController::class);
Route::get('/projects/{project}', ShowProjectController::class);
Route::put('/projects/{project}', UpdateProjectController::class);
Route::delete('/projects/{project}', DeleteProjectController::class);


Route::get('/affectations', IndexAffectationController::class);
Route::post('/affectations', StoreAffectationController::class);
Route::get('/affectations/{affectation}', ShowAffectationController::class);
Route::put('/affectations/{affectation}', UpdateAffectationController::class);
Route::delete('/affectations/{affectation}',  DeleteAffectationController::class);



Route::get('/users', IndexUserController::class);
Route::post('/users', StoreUserController::class);
Route::get('/users/{user}', ShowUserController::class);
Route::put('/users/{user}', UpdateUserController::class);
Route::delete('/users/{user}', DeleteUserController::class);
