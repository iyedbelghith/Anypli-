<?php

namespace app\Http\Controllers\Api\User;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\IndexUserRequest;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class IndexUserController extends Controller
{
   public function __construct(
       private UserRepository $userRepository
   ){}

    public function __invoke(IndexUserRequest $request)
    {
        return ApiResponse::success(
            'Users retrieved successfully',
            $this->userRepository->getAll(
                $request->perPage(),
                $request->withClient(),
                $request->withProjects()
            )
        );
    }

}
