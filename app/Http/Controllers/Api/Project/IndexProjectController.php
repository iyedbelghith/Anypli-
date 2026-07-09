<?php

namespace App\Http\Controllers\Api\Project;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Repositories\ProjectRepository;
use Illuminate\Http\Request;

class IndexProjectController extends Controller
{
    public function __construct(
        private ProjectRepository $projectRepository
    ) {}

    public function __invoke(Request $request)
    {
        $attributes = $this->getAttributes($request);

        return ApiResponse::success(
            'Projects retrieved successfully',
            $this->projectRepository->getAll(
                $attributes['perPage'],
                $attributes['withClient'],
                $attributes['withUsers']
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

            'withUsers' => filter_var(
                $request->query('with_users', false),
                FILTER_VALIDATE_BOOLEAN
            ),
        ];
    }
}
