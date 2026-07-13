<?php

namespace App\Http\Controllers\Api\Project;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Project\IndexProjectRequest;
use App\Repositories\ProjectRepository;


class IndexProjectController extends Controller
{
    public function __construct(
        private ProjectRepository $projectRepository
    ) {}

    public function __invoke(IndexProjectRequest $request)
    {

        return ApiResponse::success(
            'Projects retrieved successfully',
            $this->projectRepository->getAll(
                $request->perPage(),
                $request->withClient(),
                $request->withUsers()
            )
        );
    }


}
