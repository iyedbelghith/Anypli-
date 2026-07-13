<?php

namespace app\Http\Requests\Affectation;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateAffectationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $affectation = $this->route('affectation');

        $projectId = $this->input('project_id', $affectation?->project_id);

        return [
            'project_id' => [
                'sometimes',
                'required',
                'exists:projects,id'
            ],

            'user_id' => [
                'sometimes',
                'required',
                'exists:users,id',
                Rule::unique('project_user', 'user_id')
                    ->where('project_id', $projectId)
                    ->ignore($affectation?->id)
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
