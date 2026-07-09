<?php

namespace App\Repositories;

use App\Models\Affectation;

class AffectationRepository
{
    public function getAll( int $perPage = 10 )
    {
        return Affectation::with(['project', 'user'])->paginate($perPage);
    }

    public function findById(int $id): Affectation
    {
        return Affectation::with(['project', 'user'])->findOrFail($id);
    }

    public function create(array $data): Affectation
    {
        return Affectation::create($data);
    }

    public function update(Affectation $affectation, array $data): Affectation
    {
        $affectation->update($data);

        return $affectation->load(['project', 'user']);
    }

    public function delete(Affectation $affectation): void
    {
        $affectation->delete();
    }
}
