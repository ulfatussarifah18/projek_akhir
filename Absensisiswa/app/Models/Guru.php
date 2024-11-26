<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Guru extends Model
{
    protected $fillable = ['nama', 'email', 'mata_pelajaran'];

    public function siswa()
    {
        return $this->hasMany(Siswa::class);
    }
}
