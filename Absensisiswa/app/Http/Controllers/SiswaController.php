<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Siswa;
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
        $validator = validator::make($request->all(), [
            'nisn' => 'required',
            'nama' => 'required',
            'kelas' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $siswa = Siswa::create([
            'nisn'     => $request->nisn,
            'nama'   => $request->nama,
            'kelas'   => $request->kelas,
        ]);
        return response()->json([
            'success' => true,
            'mesage' => 'Data Berhasil Ditambahkan!',
            'data' => $siswa
        ]);
    }

    public function show($id)
    {
        $siswa = Siswa::find($id);
        return response()->json([
            'success' => true,
            'mesage' => 'Detail Data Siswa!',
            'data' => $siswa
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = validator::make($request->all(), [
            'nisn' => 'required',
            'nama' => 'required',
            'kelas' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $siswa = Siswa::find($id);
        $siswa->update([
            'nisn'     => $request->nisn,
            'nama'   => $request->nama,
            'kelas'   => $request->kelas,
        ]);
        return response()->json([
            'success' => true,
            'mesage' => 'Data Siswa Berhasil Diubah!',
            'data' => $siswa
        ]);
    }

    public function destroy($id)
    {
        $siswa = Siswa::find($id);

        $siswa->delete();
        return response()->json([
            'success' => true,
            'mesage' => 'Data Siswa Berhasil Dihapus!',
            'data' => $siswa
        ]);
    }
}