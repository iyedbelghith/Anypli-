<?php

namespace App\Http\Controllers\Api\Affectation;

use App\Http\Controllers\Controller;
use App\Models\Affectation;
use App\Repositories\AffectationRepository;
use Illuminate\Http\Request;

class UpdateAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke(Request $request, Affectation $affectation)
    {
        $data = $request->validate([
            'project_id' => 'sometimes|required|exists:projects,id',
            'user_id' => 'sometimes|required|exists:users,id',
            'date_affectation' => 'nullable|date',
            'role_in_project' => 'nullable|string|max:255',
        ]);

        $affectation = $this->affectationRepository->update($affectation, $data);

        return response()->json([
            'message' => 'Affectation modifiée avec succès',
            'affectation' => $affectation
        ]);
    }
}
