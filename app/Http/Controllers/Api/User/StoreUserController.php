<?php

namespace App\Http\Controllers\Api\User;


use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUserRequest;
use App\Repositories\UserRepository;


class StoreUserController extends Controller
{
    public function __construct(
        private UserRepository $userRepository
    ) {}

    public function __invoke(StoreUserRequest $request)
    {
        $data = $request->validated();

        $user = $this->userRepository->create($data);

        return ApiResponse::created(
            'User created successfully',
            $user
        );
    }
}
