<?php


namespace App\Helpers;

class ApiResponse
{
    public static function success(string $message, mixed $data = null, int $statusCode = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }

    public static function created(string $message, mixed $data = null)
    {
        return self::success($message, $data, 201);
    }

    public static function error(string $message, mixed $errors = null, int $statusCode = 400)
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ], $statusCode);
    }

    public static function deleted(string $message = 'Deleted successfully')
    {
        return response()->json([
            'success' => true,
            'message' => $message,
        ], 200);
    }
}
