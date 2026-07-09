<?php

namespace app\Http\Controllers\Api\Affectation;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Affectation\StoreAffectationRequest;
use App\Repositories\AffectationRepository;


class StoreAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke(StoreAffectationRequest $request)
    {
        $data = $request->validated();

        $affectation = $this->affectationRepository->create($data);

        return ApiResponse::created(
            'Affectation created successfully',
            $affectation
        );
    }
}
