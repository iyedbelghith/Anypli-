<?php

namespace App\Http\Requests\Affectation;

use Illuminate\Foundation\Http\FormRequest;

class IndexAffectationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'with_project' => filter_var(
                $this->query('with_project', false),
                FILTER_VALIDATE_BOOLEAN
            ),

            'with_user' => filter_var(
                $this->query('with_user', false),
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

            'with_project' => [
                'sometimes',
                'boolean',
            ],

            'with_user' => [
                'sometimes',
                'boolean',
            ],
        ];
    }

    public function perPage(): int
    {
        return (int) $this->query('per_page', 10);
    }

    public function withProject(): bool
    {
        return (bool) $this->input('with_project', false);
    }

    public function withUser(): bool
    {
        return (bool) $this->input('with_user', false);
    }
}
