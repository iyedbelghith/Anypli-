<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class IndexClientRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'with_user' => filter_var(
                $this->query('with_user', false),
                FILTER_VALIDATE_BOOLEAN
            ),

            'with_projects' => filter_var(
                $this->query('with_projects', false),
                FILTER_VALIDATE_BOOLEAN
            ),
        ]);
    }

    public function rules(): array
    {
        return [
            'page' => [
                'sometimes',
                'integer',
                'min:1',
            ],

            'per_page' => [
                'sometimes',
                'integer',
                'min:1',
                'max:50',
            ],

            'with_user' => [
                'sometimes',
                'boolean',
            ],

            'with_projects' => [
                'sometimes',
                'boolean',
            ],
        ];
    }

    public function perPage(): int
    {
        return (int) $this->query('per_page', 10);
    }

    public function withUser(): bool
    {
        return (bool) $this->input('with_user', false);
    }

    public function withProjects(): bool
    {
        return (bool) $this->input('with_projects', false);
    }
}
