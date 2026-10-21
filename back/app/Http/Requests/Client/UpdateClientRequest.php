<?php

namespace app\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'user_id' => [
                'nullable',
                'exists:users,id'
            ],

            'nom_entreprise' => [
                'sometimes',
                'required',
                'string',
                'max:255'
            ],

            'adresse' => [
                'nullable',
                'string',
                'max:255'
            ],

            'secteur_activite' => [
                'nullable',
                'string',
                'max:255'
            ],
        ];
    }
}
