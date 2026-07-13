<?php

namespace app\Http\Controllers\Api\Auth;
use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MeController extends Controller
{
    public function __invoke(Request $request)
    {
        return ApiResponse::success(
            'Authenticated user retrieved successfully',
            $request->user()
        );
    }
}
