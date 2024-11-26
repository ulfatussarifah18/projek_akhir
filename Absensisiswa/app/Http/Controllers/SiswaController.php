<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
use App\Models\Siswa;
use Illuminate\Http\Request;
use App\Http\Controllers;
use Illuminate\Support\Facades\Validator;


class SiswaController extends Controller
{    
    
    public function index()
    {
        $siswa = Siswa::all();

        return response()->json($siswa);
    }
     public function store(Request $request)
    {
        //define validation rules
        $validator = Validator::make($request->all(), [
            'nisn'     => 'required',
            'nama'     => 'required',
            'kelas'   => 'required',
        ]);

        //check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //create post
        $siswa = Siswa::create([
            'nisn'     => $request->nisn,
            'nama'     => $request->nama,
            'kelas'   => $request->kelas,
        ]);

        //return response
        return response()->json([
            'success'=>true,
            'mesage'=>'data berhasil ditambahkan',
            'data'  => $siswa
        ]);
    }

    public function show($id)
    {
        $siswa = Siswa::find($id);

        return response()->json([
            'success'=>true,
            'mesage'=>'data berhasil ditampilkan',
            'data'  => $siswa
        ]);
    }
}