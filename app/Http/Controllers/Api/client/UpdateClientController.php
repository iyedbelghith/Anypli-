<?php

namespace app\Http\Controllers\Api\client;

use App\Helpers\ApiResponse;
use app\Http\Controllers\Controller;
use app\Http\Requests\Client\UpdateClientRequest;
use App\Models\Client;
use App\Repositories\ClientRepository;


class UpdateClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository){}

    public function __invoke(UpdateClientRequest $request , Client $client)
    {
        $data = $request->validated();

        $client = $this->clientRepository->update($client, $data);

        return ApiResponse::success(
            'Client updated successfully',
            $client->fresh()
        );

    }
}
