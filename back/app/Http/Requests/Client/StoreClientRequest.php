<?php

namespace app\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreClientRequest extends FormRequest
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
                Rule::exists('users', 'id')
                    ->whereNull('deleted_at'),
            ],

            'nom_entreprise' => [
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
