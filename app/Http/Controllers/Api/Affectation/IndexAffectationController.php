<?php



namespace app\Http\Controllers\Api\Affectation;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Affectation\IndexAffectationRequest;
use App\Repositories\AffectationRepository;

class IndexAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke(IndexAffectationRequest $request)
    {
        return ApiResponse::success(
            'Affectations retrieved successfully',
            $this->affectationRepository->getAll(
                $request->perPage(),
                $request->withProject(),
                $request->withUser()
            )
        );
    }

}
