<?php
namespace app\Services;


use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService{
    public function login (array $credentials): ?array
    {
        $accessToken = Auth::guard('api')
            ->setTTL(60)
            ->attempt($credentials);


        if(! $accessToken){
            return null;
        }
        $user =Auth::guard('api')->user();
        JWTAuth::factory()->setTTL(20160);
        $refreshToken = JWTAuth::claims([
            'type' => 'refresh',
        ])->fromUser($user);

        return [
            'user' => $user,
            'accessToken' => $accessToken,
            'refreshToken' => $refreshToken
        ];
    }

    public function refresh(): array
    {
        $payload = JWTAuth::parseToken()->getPayload();



        if ($payload->get('type') !== 'refresh') {
            throw new \Exception('Invalid refresh token');
        }

        $user = JWTAuth::parseToken()->authenticate();

        $newAccessToken = Auth::guard('api')
            ->setTTL(60)
            ->login($user);

        return [
            'accessToken' => $newAccessToken,

        ];
    }
    public function me()
    {
        return JWTAuth::parseToken()->authenticate();
    }

    public function logout(): void
    {
        JWTAuth::parseToken()->invalidate();
    }
}
