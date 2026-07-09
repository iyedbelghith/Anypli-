<?php
namespace app\Http\Controllers\Api\Project;

use App\Helpers\ApiResponse;
use app\Http\Controllers\Controller;
use App\Models\Project;
use App\Repositories\ProjectRepository;

class ShowProjectController extends Controller
{
    public function __construct(
        private ProjectRepository $projectRepository
    ){}
    public function __invoke(Project $project)
    {
        return ApiResponse::success(
            'Project retrieved successfully',
            $this->projectRepository->findById($project->id)
        );
    }
}
