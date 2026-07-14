<?php

namespace app\Http\Controllers\Api\Auth;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response as HttpStatus;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (! $token = auth('api')->attempt($credentials)) {
            return ApiResponse::error(
                'Invalid email or password',
                null,
                HttpStatus::HTTP_UNAUTHORIZED
            );
        }

        return ApiResponse::success(
            'Login successful',
            [
                'user' => auth('api')->user(),
                'access_token' => $token,
                'token_type' => 'Bearer',
                'expires_in' => auth('api')->factory()->getTTL() * 60,
            ]
        );
    }
}
