<?php

namespace app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Enums\ProjectStatus;

class Project extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'client_id',
        'titre',
        'description',
        'status',
        'date_debut',
        'date_fin',
    ];
    protected $casts = [
        'status' => ProjectStatus::class,
        'date_debut'=>'date',
        'date_fin' => 'date',
    ];
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class , 'project_user')
            ->withPivot('date_affectation', 'role_in_project')
            ->withTimestamps();
    }
    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }

}
