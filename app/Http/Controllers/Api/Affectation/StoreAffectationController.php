<?php

namespace App\Http\Controllers\Api\Affectation;

use App\Http\Controllers\Controller;
use App\Repositories\AffectationRepository;
use Illuminate\Http\Request;

class StoreAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'user_id' => 'required|exists:users,id',
            'date_affectation' => 'nullable|date',
            'role_in_project' => 'nullable|string|max:255',
        ]);

        $affectation = $this->affectationRepository->create($data);

        return response()->json([
            'message' => 'Affectation créée avec succès',
            'affectation' => $affectation
        ], 201);
    }
}
