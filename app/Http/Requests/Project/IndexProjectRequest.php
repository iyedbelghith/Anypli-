<?php

namespace app\Http\Requests\Project;

use App\Http\Requests\BaseIndexRequest;

class IndexProjectRequest extends BaseIndexRequest
{
    public function rules(): array
    {
        return array_merge(
            $this->paginationRules(),
            $this->booleanRules([
                'with_client',
                'with_users',
            ])
        );
    }

    public function withClient(): bool
    {
        return $this->booleanValue('with_client');
    }

    public function withUsers(): bool
    {
        return $this->booleanValue('with_users');
    }
}
