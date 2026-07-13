<?php


namespace App\Helpers;
use Symfony\Component\HttpFoundation\Response as HttpStatus;

class ApiResponse
{
    public static function success(string $message, mixed $data = null, int $statusCode = HttpStatus::HTTP_OK)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }

    public static function created(string $message, mixed $data = null)
    {
        return self::success($message, $data, HttpStatus::HTTP_CREATED);
    }

    public static function error(string $message, mixed $errors = null, int $statusCode = HttpStatus::HTTP_BAD_REQUEST)
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
