<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class ShowUserController extends Controller
{
    public function __construct (
        private UserRepository $userRepository
    ){}
    public function __invoke(User $user)
    {
        return response()->json([
            'user' => $this ->userRepository ->findById($user->id)
        ]);
    }
}
