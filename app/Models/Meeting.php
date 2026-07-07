<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Meeting extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'project_id',
        'client_id',
        'meeting_date',
        'type',
        'description',
        'created_by',


    ];
    protected $casts = [
        'meeting_date'=> 'datetime'
    ];
    public function project(){
        return $this->belongsTo(Project::class);
    }
    public function user(){
        return $this->belongsToMany(User::class , 'meeting_user')
            ->withPivot('status_presence')
            ->withTimestamps();
    }

}
