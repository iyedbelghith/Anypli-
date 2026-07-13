<?php

namespace app\Http\Requests\User;

use App\Http\Requests\BaseIndexRequest;

class IndexUserRequest extends BaseIndexRequest
{
    public function rules(): array
    {
        return array_merge(
            $this->paginationRules(),
            $this->booleanRules([
                'with_client',
                'with_projects',
            ])
        );
    }

    public function withClient(): bool
    {
        return $this->booleanValue('with_client');
    }

    public function withProjects(): bool
    {
        return $this->booleanValue('with_projects');
    }
}
