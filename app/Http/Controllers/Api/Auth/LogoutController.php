<?php

namespace app\Http\Controllers\Api\Auth;
use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return ApiResponse::success(
            'Logout successful'
        );
    }
}
