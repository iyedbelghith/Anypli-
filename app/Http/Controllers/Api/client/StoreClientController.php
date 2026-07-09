<?php

namespace App\Http\Controllers\Api\Client;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Client\StoreClientRequest;
use App\Repositories\ClientRepository;


class StoreClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository
    ){}
    public function __invoke(StoreClientRequest $request)
    {
        $data = $request->validated();

        $client = $this->clientRepository->create($data);

        return ApiResponse::created(
            'Client créé avec succés' ,
            $client
        );
    }
}
