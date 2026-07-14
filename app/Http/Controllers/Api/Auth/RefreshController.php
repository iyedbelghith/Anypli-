<?php

namespace app\Http\Controllers\Api\Auth;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Services\AuthService;
use Symfony\Component\HttpFoundation\Response as HttpStatus;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class RefreshController extends Controller
{
    public function __construct(
        private AuthService $authService){}

    public function __invoke()
    {
        try{
            return ApiResponse::success(
                'Token refreshed',
                $this->authService->refresh()
            );
        }catch (TokenInvalidException $e){
            return ApiResponse::error(
                'Invalid token',
                null,
                HttpStatus::HTTP_UNAUTHORIZED,
            );
        }catch(JWTException $e){
            return ApiResponse::error(
                'Token not provided or refresh period expired',
                null,
                HttpStatus::HTTP_UNAUTHORIZED,
            );
        }
    }
}
