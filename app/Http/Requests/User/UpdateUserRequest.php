<?php

namespace app\Http\Requests\User;

use App\Enums\UserRole;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $userId = $this->route('user')?->id;

        return [
            'name' => [
                'sometimes',
                'required',
                'string',
                'max:255'
            ],

            'prenom' => [
                'sometimes',
                'nullable',
                'string',
                'max:255'
            ],

            'email' => [
                'sometimes',
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($userId)
            ],

            'password' => [
                'sometimes',
                'required',
                'string',
                'min:8'
            ],

            'telephone' => [
                'sometimes',
                'nullable',
                'string',
                'max:20'
            ],

            'role' => [
                'sometimes',
                'required',
                Rule::enum(UserRole::class)
            ],
        ];
    }
}
