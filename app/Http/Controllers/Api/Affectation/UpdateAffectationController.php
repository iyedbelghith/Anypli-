<?php

namespace App\Http\Controllers\Api\Affectation;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Affectation\UpdateAffectationRequest;
use App\Models\Affectation;
use App\Repositories\AffectationRepository;


class UpdateAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke(UpdateAffectationRequest $request, Affectation $affectation)
    {
        $projectId = $request->input('project_id', $affectation->project_id);
        $data = $request->validated();

        $affectation = $this->affectationRepository->update($affectation, $data);

        return ApiResponse::success(
            'Affectation updated successfully',
            $affectation->fresh()
        );
    }
}
