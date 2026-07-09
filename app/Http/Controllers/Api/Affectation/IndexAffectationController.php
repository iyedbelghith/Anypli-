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
        $attributes = $this->getAttributes($request);

        return ApiResponse::success(
            'Affectations retrieved successfully',
            $this->affectationRepository->getAll(
                $attributes['perPage'],
                $attributes['withProject'],
                $attributes['withUser']
            )
        );
    }
    private function getAttributes(Request $request): array
    {
        return [
            'perPage' => min((int) $request->query('per_page', 10), 50),

            'withProject' => filter_var(
                $request->query('with_project', false),
                FILTER_VALIDATE_BOOLEAN
            ),

            'withUser' => filter_var(
                $request->query('with_user', false),
                FILTER_VALIDATE_BOOLEAN
            ),
        ];
    }
}
