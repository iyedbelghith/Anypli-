<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class IndexUserController extends Controller
{
   public function __construct(
       private UserRepository $userRepository
   ){}

    public function __invoke()
    {
        return response()->json([
            'users' => $this->userRepository->getAll()
        ]);

    }
}
