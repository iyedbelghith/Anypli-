<?php


namespace app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

abstract class BaseIndexRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function paginationRules(): array
    {
        return [
            'page' => ['sometimes', 'integer', 'min:1'],
            'per_page' => ['sometimes', 'integer', 'min:1', 'max:100'],
        ];
    }

    public function perPage(): int
    {
        return (int)$this->query('per_page', 10);
    }

    protected function booleanRules(array $fields): array
    {
        $rules = [];

        foreach ($fields as $field) {
            $rules[$field] = ['sometimes', 'boolean'];
        }

        return $rules;
    }

    protected function booleanValue(string $field): bool
    {
        return filter_var(
            $this->query($field, false),
            FILTER_VALIDATE_BOOLEAN
        );
    }
}
