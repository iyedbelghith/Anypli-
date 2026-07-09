<?php

namespace app\Http\Controllers\Api\client;

use App\Helpers\ApiResponse;
use app\Http\Controllers\Controller;
use App\Repositories\ClientRepository;

class DeleteClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository
    ){}
    public function __invoke(Client $client)
    {
        $this->clientRepository->delete($client);
        return ApiResponse::deleted('Client supprimé avec succès');
    }
}
