<?php

namespace App\Http\Controllers\Api\Project;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Repositories\ProjectRepository;

class DeleteProjectController extends Controller{
    public function __construct(
        private ProjectRepository $projectRepository,
    ){}
    public function __invoke(Project $project){
        $this -> projectRepository -> delete($project);
        return response() -> json([
            'message' => 'Project deleted'
        ]) ;

    }
}
