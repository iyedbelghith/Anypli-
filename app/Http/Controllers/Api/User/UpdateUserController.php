<?php

namespace App\Http\Controllers\Api\User;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateUserController extends Controller
{
    public function __construct(
        private UserRepository $userRepository
    ){}
    public function __invoke(Request $request , User $user)
    {
        $data = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'prenom' => 'sometimes|required|string|max:255',
            'email' => [
                'sometimes' , 'required', 'email' , Rule::unique('users' , 'email')->ignore($user->id),
            ],
            'password' => 'sometimes|required|string|min:8',
            'telephone' => 'sometimes|required|string|max:255',
            'role' => ['sometimes' , 'required' , Rule::enum(UserRole::class)],
        ]);
        $user = $this->userRepository->update($user, $data);
        return response([
            'message' => 'user updated successfully',
            'user' => $user->fresh()
        ]);
    }
}
