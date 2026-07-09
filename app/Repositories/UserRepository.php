<?php
namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function getAll(
        int $perPage = 10,
        bool $withClient = false,
        bool $withProjects = false
    ) {
        $relations = [];

        if ($withClient) {
            $relations[] = 'client';
        }

        if ($withProjects) {
            $relations[] = 'projects';
        }

        return User::with($relations)->paginate($perPage);
    }

    public function findById(int $id): User
    {
        return User::findOrFail($id);
    }

    public function create(array $data): User
    {
        return User::create($data);
    }

    public function update(User $user, array $data): User
    {
        $user->update($data);

        return $user;
    }

    public function delete(User $user): void
    {
        $user->delete();
    }
}
