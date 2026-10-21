<?php

namespace app\Http\Controllers\Api\Auth;
use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;


class LogoutController extends Controller
{
    public function __invoke()
    {
        JWTAuth::parseToken()->invalidate();

        return ApiResponse::success('Logout successful');
    }
}
