<?php


namespace App\Http\Controllers\Api\Project;

use App\Enums\ProjectStatus;
use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Repositories\ProjectRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateProjectController extends Controller {
    public function __construct (
        private ProjectRepository $projectRepository
    ){}
    public function __invoke(Request $request , Project $project)
    {
        $data = $request ->validate([
            'client_id' => 'sometimes|required|exists:clients,id',
            'titre' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string|max:255',
            'status' => ['sometimes', 'required', Rule::enum(ProjectStatus::class)],
            'date_debut' => 'nullable|date',
            'date_fin' => 'nullable|date|after_or_equal:date_debut',
        ]);
        $project = $this->projectRepository->update($project, $data);
        return response()->json([
            'message' => 'Project updated successfully',
            'project' => $project

        ]);
    }
}
