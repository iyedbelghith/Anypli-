<?php

namespace app\Http\Controllers\Api\User;

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
        $attributes = $this->getAttributes($request);

        return ApiResponse::success(
            'Users retrieved successfully',
            $this->userRepository->getAll(
                $attributes['perPage'],
                $attributes['withClient'],
                $attributes['withProjects']
            )
        );
    }
    private function getAttributes(Request $request): array
    {
        return [
            'perPage' => min((int) $request->query('per_page', 10), 50),

            'withClient' => filter_var(
                $request->query('with_client', false),
                FILTER_VALIDATE_BOOLEAN
            ),

            'withProjects' => filter_var(
                $request->query('with_projects', false),
                FILTER_VALIDATE_BOOLEAN
            ),
        ];
    }
}
