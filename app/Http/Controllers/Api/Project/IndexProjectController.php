<?php
 namespace App\Http\Controllers\Api\Project;

 use App\Http\Controllers\Controller;
 use App\Repositories\ProjectRepository;

 class IndexProjectController extends Controller
 {
     public function __construct (
         private ProjectRepository $projectRepository
     ){}
     public function __invoke()
     {  return response()->json([
            'projects' =>$this ->projectRepository->getAll()
        ]);
     }
 }
