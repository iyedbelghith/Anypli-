<?php



namespace app\Http\Controllers\Api\Affectation;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Repositories\AffectationRepository;
use Illuminate\Http\Request;

class IndexAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke(Request $request)
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
