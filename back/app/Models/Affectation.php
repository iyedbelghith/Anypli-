<?php

namespace app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Affectation extends Model
{
    use SoftDeletes;

    protected $table = 'project_user';

    protected $fillable = [
        'project_id',
        'user_id',
        'date_affectation',
        'role_in_project',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
