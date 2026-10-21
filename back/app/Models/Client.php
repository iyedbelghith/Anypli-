<?php

namespace app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{

    use softDeletes;
    protected $fillable = [
        'user_id',
        'nom_entreprise',
        'adresse',
        'secteur_activite',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function projects(){
        return $this->hasMany(Project::class);
    }
    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }
}
