<?php

namespace app\Http\Requests\Client;

use App\Http\Requests\BaseIndexRequest;

class IndexClientRequest extends BaseIndexRequest
{
    public function rules(): array
    {
        return array_merge(
            $this->paginationRules(),
            $this->booleanRules([
                'with_user',
                'with_projects',
            ])
        );
    }

    public function withUser(): bool
    {
        return $this->booleanValue('with_user');
    }

    public function withProjects(): bool
    {
        return $this->booleanValue('with_projects');
    }
}
