<?php

namespace App\Repositories;

use App\Models\Project;

class ProjectRepository
{
    public function getAll()
    {
        return Project::with(['client', 'users'])->get();
    }

    public function findById(int $id): Project
    {
        return Project::with(['client', 'users'])->findOrFail($id);
    }

    public function create(array $data): Project
    {
        return Project::create($data);
    }

    public function update(Project $project, array $data): Project
    {
        $project->update($data);

        return $project->load(['client', 'users']);
    }

    public function delete(Project $project): void
    {
        $project->delete();
    }
}
