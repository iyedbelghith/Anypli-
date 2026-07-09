<?php
namespace App\Http\Controllers\Api\Project;
use App\Http\Controllers\Controller;
use App\Repositories\ProjectRepository;
use App\Enums\ProjectStatus;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class StoreProjectController extends Controller
{
    public function __construct(
        private ProjectRepository $projectRepository){}


    public function __invoke(Request $request){
        $data = $request->validate([
            'client_id' => 'required|integer|exists:clients,id',
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'status' => ['sometimes' , Rule::enum(ProjectStatus::class)],
            'date_debut' => 'nullable|date',
            'date_fin' => 'nullable|date|after_or_equal:date_debut',

        ]);
        $project = $this->projectRepository->create($data);
        return response()->json([
            'message' => 'Project created successfully',
            'project' => $project,
        ],201);
    }
}
