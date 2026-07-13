<?php


namespace app\Http\Controllers\Api\Project;


use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Projet\UpdateProjectRequest;
use App\Models\Project;
use App\Repositories\ProjectRepository;


class UpdateProjectController extends Controller {
    public function __construct (
        private ProjectRepository $projectRepository
    ){}
    public function __invoke(UpdateProjectRequest $request , Project $project)
    {
        $data = $request ->validated();
        $project = $this->projectRepository->update($project, $data);
        return ApiResponse::success(
            'Project updated successfully',
            $project->fresh()
        );
    }
}
