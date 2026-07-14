<?php

namespace app\Http\Controllers\Api\Auth;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Services\AuthService;
use Symfony\Component\HttpFoundation\Response as HttpStatus;


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
        }catch ( \Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Refresh failed',
                'error_class' => get_class($e),
                'error_message' => $e->getMessage(),
            ], HttpStatus::HTTP_UNAUTHORIZED);
        }

    }
}
