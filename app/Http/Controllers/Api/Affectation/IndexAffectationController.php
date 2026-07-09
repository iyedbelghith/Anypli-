<?php



namespace App\Http\Controllers\Api\Affectation;

use App\Http\Controllers\Controller;
use App\Repositories\AffectationRepository;

class IndexAffectationController extends Controller
{
    public function __construct(
        private AffectationRepository $affectationRepository
    ) {}

    public function __invoke()
    {
        return response()->json([
            'affectations' => $this->affectationRepository->getAll()
        ]);
    }
}
