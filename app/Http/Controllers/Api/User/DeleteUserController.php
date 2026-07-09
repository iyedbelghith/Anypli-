<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use http\Client\Curl\User;
use Illuminate\Http\Request;

class DeleteUserController extends Controller
{
    public function __construct (
        UserRepository $userRepository
    ){}
    public function __invoke(User $user)
    {
        $this ->userRepository->delete($user);
        return response()->json([
            'message' => 'User deleted successfully'
        ]);
    }
}
