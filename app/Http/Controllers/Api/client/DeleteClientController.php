<?php

namespace App\Http\Controllers\Api\Client;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

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
