<?php

namespace App\Http\Requests\Affectation;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreAffectationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'project_id' => [
                'required',
                Rule::exists('projects', 'id')
                    ->whereNull('deleted_at'),
            ],

            'user_id' => [
                'required',
                Rule::exists('users', 'id')
                    ->whereNull('deleted_at'),

                Rule::unique('project_user', 'user_id')
                    ->where('project_id', $this->project_id)
                    ->whereNull('deleted_at'),
            ],

            'date_affectation' => [
                'nullable',
                'date'
            ],

            'role_in_project' => [
                'nullable',
                'string',
                'max:255'
            ],
        ];
    }
}
