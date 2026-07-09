<?php

namespace app\Http\Controllers\Api\User;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use http\Client\Curl\User;

class DeleteUserController extends Controller
{
    public function __construct (
        private UserRepository $userRepository
    ){}
    public function __invoke(User $user)
    {
        $this ->userRepository->delete($user);
        return ApiResponse::deleted(
            'User deleted successfully'
        );
    }
}
