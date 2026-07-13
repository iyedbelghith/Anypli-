<?php

namespace app\Http\Requests\Affectation;

use App\Http\Requests\BaseIndexRequest;

class IndexAffectationRequest extends BaseIndexRequest
{

    public function rules(): array
    {

        return array_merge(
            $this->paginationRules(),
            $this->booleanRules([
                'with_project',
                'with_user',
            ])
        );
    }

    public function withProject(): bool
    {
        return $this->booleanValue('with_project');
    }

    public function withUser(): bool
    {
        return $this->booleanValue('with_user');
    }
}
