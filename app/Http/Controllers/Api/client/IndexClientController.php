<?php

namespace app\Http\Controllers\Api\client;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Client\IndexClientRequest;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

class IndexClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository ){}

    public function __invoke(IndexClientRequest $request)
    {
        return ApiResponse::success(
            'Clients retrieved successfully',
            $this->clientRepository->getAll(
                $request->perPage(),
                $request->withUser(),
                $request->withProjects()
            )
        );
    }

}
