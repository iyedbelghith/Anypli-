<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

class IndexClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository ){}

    public function __invoke(Request $request)
    {
        return response()->json([
            'clients' => $this ->clientRepository->getAll()
        ]);
    }
}
