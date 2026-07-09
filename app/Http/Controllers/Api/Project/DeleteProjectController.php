<?php

namespace app\Http\Controllers\Api\Project;

use App\Helpers\ApiResponse;
use app\Http\Controllers\Controller;
use App\Models\Project;
use App\Repositories\ProjectRepository;

class DeleteProjectController extends Controller{
    public function __construct(
        private ProjectRepository $projectRepository,
    ){}
    public function __invoke(Project $project){
        $this -> projectRepository -> delete($project);
        return ApiResponse::deleted(
            'Project deleted successfully'
        );

    }
}
