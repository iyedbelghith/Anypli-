<?php
namespace App\Http\Controllers\Api\Project;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Repositories\ProjectRepository;

class ShowProjectController extends Controller
{
    public function __construct(
        private ProjectRepository $projectRepository
    ){}
    public function __invoke(Project $project)
    {
        return response()->json([
            'project' => $this-> projectRepository->findById($project->id)
        ]);
    }
}
