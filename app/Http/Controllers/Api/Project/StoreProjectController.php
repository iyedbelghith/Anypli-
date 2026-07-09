<?php
namespace app\Http\Controllers\Api\Project;
use App\Helpers\ApiResponse;
use app\Http\Controllers\Controller;
use app\Http\Requests\Projet\StoreProjectRequest;
use App\Repositories\ProjectRepository;

class StoreProjectController extends Controller
{
    public function __construct(
        private ProjectRepository $projectRepository){}


    public function __invoke(StoreProjectRequest $request){
        $data = $request->validated();
        $project = $this->projectRepository->create($data);
        return ApiResponse::created(
            'Project created successfully',
            $project
        );
    }
}
