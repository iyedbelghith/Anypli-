<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

class UpdateClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository){}

    public function __invoke(Request $request , Client $client)
    {
        $data = $request -> validate([
            'user_id' => 'nullable|integer|exists:users,id',
            'nom_entreprise' => 'required|string|max:255',
            'adresse' => 'nullable|string|max:255',
            'secteur_activite' => 'nullable|string|max:255',
        ]);
        $client = $client -> update($data);
        return response()->json([
            'message' => 'Client updated successfully',
            'client' => $client
        ]);

    }
}
