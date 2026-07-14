<?php
namespace app\Services;


use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService{
    public function login (array $credentials): ?array
    {
        $token =Auth::guard('api')->attempt($credentials);
        if(! $token){
            return null;
        }
        return $this->respondWithToken($token);
    }

    public function refresh(): array{
        $token =JWTAuth :: parseToken()->refresh();
        return $this ->respondWithToken($token);
    }
    private function respondWithToken(string $token): array
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::guard('api')->factory()->getTTL() * 60
        ];
    }
}
