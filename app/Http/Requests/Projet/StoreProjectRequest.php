<?php

namespace app\Http\Requests\Projet;

use App\Enums\ProjectStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'client_id' => [
                'required',
                'exists:clients,id'
            ],

            'titre' => [
                'required',
                'string',
                'max:255'
            ],

            'description' => [
                'nullable',
                'string',
                'max:255'
            ],

            'status' => [
                'sometimes',
                Rule::enum(ProjectStatus::class)
            ],

            'date_debut' => [
                'nullable',
                'date'
            ],

            'date_fin' => [
                'nullable',
                'date',
                'after_or_equal:date_debut'
            ],

            'date_fin_reelle' => [
                'nullable',
                'date'
            ],
        ];
    }
}
