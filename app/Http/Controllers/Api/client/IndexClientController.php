<?php

namespace app\Http\Controllers\Api\client;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Repositories\ClientRepository;
use Illuminate\Http\Request;

class IndexClientController extends Controller
{
    public function __construct(
        private ClientRepository $clientRepository ){}

    public function __invoke(Request $request)
    {
        $attributes = $this->getAttributes($request);
        $perPage = $request->query('per_page', 10);
        return ApiResponse::success(
            'Clients retrieved successfully',
            $this->clientRepository->getAll(
                $attributes['perPage'],
                $attributes['withUser'],
                $attributes['withProjects']
            )
        );}
    private function getAttributes(Request $request): array
    {
        return [
            'perPage' => min((int) $request->query('per_page', 10), 50),

            'withUser' => filter_var(
                $request->query('with_user', false),
                FILTER_VALIDATE_BOOLEAN
            ),

            'withProjects' => filter_var(
                $request->query('with_projects', false),
                FILTER_VALIDATE_BOOLEAN
            ),
        ];
    }
}
