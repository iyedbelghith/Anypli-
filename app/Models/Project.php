<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'clients_id',
        'title',
        'description',
        'status',
        'start_date',
        'end_date',
    ];
    protected $dates = ['start_date'=>'date',
        'end_date' => 'date',
        ];
    public function client(){
        return $this->belongsTo(Client::class);
    }
    public function users(){
        return $this->belongsToMany(User::class , 'project_user')
            ->withTimestamps();
    }
    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }

}
