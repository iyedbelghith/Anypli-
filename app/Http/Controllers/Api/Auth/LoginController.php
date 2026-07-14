<?php

namespace app\Http\Controllers\Api\Auth;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response as HttpStatus;

class LoginController extends Controller
{
    public function __construct (
        private AuthService $authService,
    ){}
    public function __invoke(LoginRequest $request)
    {
        $authData = $this->authService->login($request->validated());

        if (! $authData) {
            return ApiResponse::error(
                'Invalid email or password',
                null,
                HttpStatus::HTTP_UNAUTHORIZED
            );
        }

        return ApiResponse::success(
            'Login successful',
            $authData
        );
    }
}
