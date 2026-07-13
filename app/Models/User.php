<?php

namespace app\Models;


use App\Enums\UserRole;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;
    use  SoftDeletes;
    use HasApiTokens ;

    protected $fillable = [
        'name',
        'prenom',
        'email',
        'password',
        'telephone',
        'role'
    ];


    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function client()
    {
        return $this->hasOne(Client::class);
    }
    public function projects (){
        return $this->belongsToMany(Project::class , 'project_user')
        ->withPivot('date_affectation', 'role_in_project')
        ->withTimestamps();
    }
    public function meetings()
    {
        return $this->belongsToMany(Meeting::class, 'meeting_user')
            ->withPivot('status_presence')
            ->withTimestamps();
    }
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'role' => UserRole::class,
        ];
    }
}
