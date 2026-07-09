<?php

namespace App\Http\Controllers\Api\User;


use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use app\Http\Requests\User\UpdateUserRequest;
use App\Models\User;
use App\Repositories\UserRepository;

class UpdateUserController extends Controller
{
    public function __construct(
        private UserRepository $userRepository
    ){}
    public function __invoke(UpdateUserRequest $request , User $user)
    {
        $data = $request->validated();
        $user = $this->userRepository->update($user, $data);
        return ApiResponse::success(
            'User updated successfully',
            $user->fresh()
        );
    }
}
