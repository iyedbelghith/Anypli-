<?php

namespace App\Http\Controllers\Api\User;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class IndexUserController extends Controller
{
   public function __construct(
       private UserRepository $userRepository
   ){}

    public function __invoke(Request $request)
    {
        $perPage = $request->query('per_page', 10);
        return ApiResponse::success(
            'Users retrieved successfully',
            $this->userRepository->getAll($perPage)
        );

    }
}
