<?php

namespace app\Http\Controllers\Api\Auth;
use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class MeController extends Controller
{
    public function __invoke()
    {
        $user = JWTAuth::parseToken()->authenticate();
        return ApiResponse::success(
            'Authenticated user retrieved successfully',
            $user
        );
    }
}
