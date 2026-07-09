<?php

namespace app\Http\Controllers\Api\User;

use App\Helpers\ApiResponse;
use app\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\UserRepository;

class ShowUserController extends Controller
{
    public function __construct (
        private UserRepository $userRepository
    ){}
    public function __invoke(User $user)
    {
        return ApiResponse::success(
            'User retrieved successfully',
            $this->userRepository->findById($user->id)
        );
    }
}
