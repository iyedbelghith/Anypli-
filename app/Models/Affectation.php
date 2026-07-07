<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Affectation extends Model
{
    protected $table = 'project_user';
    protected $fillable = [
        'project_id',
        'user_id',
    ];
}
