<?php
 namespace App\Http\Controllers\Api\Project;

 use App\Helpers\ApiResponse;
 use App\Http\Controllers\Controller;
 use App\Repositories\ProjectRepository;
 use Illuminate\Http\Request;

 class IndexProjectController extends Controller
 {
     public function __construct (
         private ProjectRepository $projectRepository
     ){}
     public function __invoke(Request $request)
     {
         $perPage = $request->query('per_page', 10);
         return ApiResponse::success(
             'Projects retrieved successfully',
             $this->projectRepository->getAll($perPage)
         );
     }
 }
