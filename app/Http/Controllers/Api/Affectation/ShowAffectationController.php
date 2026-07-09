<?php

namespace App\Http\Controllers\Api\Affectation;

use App\Http\Controllers\Controller;
use App\Models\Affectation;
use App\Repositories\AffectationRepository;

class ShowAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke(Affectation $affectation)
    {
        return response()->json([
            'affectation' => $this->affectationRepository->findById($affectation->id)
        ]);
    }
}
