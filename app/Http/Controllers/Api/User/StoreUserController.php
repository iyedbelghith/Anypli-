<?php

namespace App\Http\Controllers\Api\User;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class StoreUserController extends Controller
{
    public function __construct(
        private UserRepository $userRepository
    ) {}

    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'prenom' => 'nullable|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'telephone' => 'nullable|string|max:20',
            'role' => ['required', Rule::enum(UserRole::class)],
        ]);

        $user = $this->userRepository->create($data);

        return response()->json([
            'message' => 'Utilisateur créé avec succès',
            'user' => $user
        ], 201);
    }
}
