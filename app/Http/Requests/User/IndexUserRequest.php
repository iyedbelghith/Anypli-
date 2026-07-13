<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class IndexUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'with_client' => filter_var(
                $this->query('with_client', false),
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

            'with_client' => [
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

    public function withClient(): bool
    {
        return (bool) $this->input('with_client', false);
    }

    public function withProjects(): bool
    {
        return (bool) $this->input('with_projects', false);
    }
}
