<?php


namespace App\Repositories;

use App\Models\Client;

class ClientRepository
{
    public function getAll(
        int $perPage = 10,
        bool $withUser = false,
        bool $withProjects = false
    ) {
        $relations = [];

        if ($withUser) {
            $relations[] = 'user';
        }

        if ($withProjects) {
            $relations[] = 'projects';
        }

        return Client::with($relations)->paginate($perPage);
    }

    public function findById(int $id)
    {
        return Client::with(['user', 'projects'])->findOrFail($id);
    }

    public function create(array $data)
    {
        return Client::create($data);
    }

    public function update(Client $client, array $data)
    {
        $client->update($data);

        return $client;
    }

    public function delete(Client $client): void
    {
        $client->delete();
    }
}
