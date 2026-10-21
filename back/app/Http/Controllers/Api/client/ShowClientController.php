<?php

namespace app\Http\Controllers\Api\client;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Repositories\ClientRepository;

class ShowClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository
    ){}
    public function __invoke(Client $client)
    {
        return ApiResponse::success(
            'Client récupéré avec succès',
            $this->clientRepository->findById($client->id)
        );
    }
}
