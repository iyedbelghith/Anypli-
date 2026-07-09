<?php

namespace App\Http\Controllers\Api\Client;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

class IndexClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository ){}

    public function __invoke(Request $request)
    {
        $perPage = $request->query('per_page', 10);
        return ApiResponse::success(
            'Liste des clients récupérée avec succès',
            $this ->clientRepository->getAll($perPage)

        );
    }
}
