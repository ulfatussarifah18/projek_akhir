<?php

namespace App\Models;

<<<<<<< HEAD
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    protected $fillable =['nama', 'kelas', 'guru_id'];

    public function guru()
    {
        return $this->belongsTo(Guru::class);
    }

    public function absensi()
   {
       return $this->hasMany(Absensi::class);
   }
}
=======
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class siswa extends Model
{

    use HasFactory;
    protected $fillable = [
        'nisn',
        'nama',
        'kelas',
    ];

     /**
     * image
     *
     * @return Attribute
     */
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => url('/storage/posts/' . $image),
        );
    }
}



   
>>>>>>> 9eb04632618387aeb78d7c2e1253ad010de11cb2
