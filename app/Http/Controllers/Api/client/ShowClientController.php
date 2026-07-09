<?php

namespace App\Http\Controllers\Api\Client;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ShowClientController extends Controller
{
    public function __invoke(Client $client)
    {
        return ApiResponse::success(
            'Client récupéré avec succès',
            $this->clientRepository->findById($client->id)
        );
    }
}
