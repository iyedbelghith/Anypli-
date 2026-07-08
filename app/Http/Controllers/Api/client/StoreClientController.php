<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

class StoreClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository
    ){}
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'nullable|integer|exists:users,id',
            'nom_entreprise' => 'required|string|max:255',
            'adresse' => 'nullable|string|max:255',
            'secteur_activite' => 'nullable|string|max:255',
        ]);
        $client = $this->clientRepository->create($data);
        return response()->json([
            'message' => 'Client  created',
            'client' => $client
        ] , 201);
    }
}
