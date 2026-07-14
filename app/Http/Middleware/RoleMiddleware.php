<?php

namespace app\Http\Middleware;

use App\Helpers\ApiResponse;
use BackedEnum;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            if (! $user) {
                return ApiResponse::error(
                    'Unauthenticated',
                    null,
                    Response::HTTP_UNAUTHORIZED
                );
            }

            $userRole = $user->role instanceof BackedEnum
                ? $user->role->value
                : $user->role;

            if (! in_array($userRole, $roles, true)) {
                return ApiResponse::error(
                    'Forbidden: you do not have permission to access this resource',
                    null,
                    Response::HTTP_FORBIDDEN
                );
            }

            return $next($request);

        } catch (\Exception $e) {
            return ApiResponse::error(
                'Unauthenticated',
                null,
                Response::HTTP_UNAUTHORIZED
            );
        }
    }
}
