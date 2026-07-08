<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ShowClientController extends Controller
{
    public function __invoke(Client $client)
    {
        return response()->json([
            'clients' => $client->load(['user','projects'])
        ]);
    }
}
