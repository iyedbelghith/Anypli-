<?php

namespace App\Http\Controllers\Api\Affectation;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Models\Affectation;
use App\Repositories\AffectationRepository;

class DeleteAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke(Affectation $affectation)
    {
        $this->affectationRepository->delete($affectation);

        return ApiResponse::deleted(
            'Affectation deleted successfully'
        );
    }
}
