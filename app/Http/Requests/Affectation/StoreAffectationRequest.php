<?php

namespace app\Http\Requests\Affectation;

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
                'exists:projects,id'
            ],

            'user_id' => [
                'required',
                'exists:users,id',
                Rule::unique('project_user', 'user_id')
                    ->where('project_id', $this->project_id)
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
