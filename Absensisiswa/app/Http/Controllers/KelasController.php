<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Kelas;
use Illuminate\Support\Facades\Validator;

class KelasController extends Controller
{
    public function index()
    {
        $kelas = Kelas::all();

        return response()->json($kelas);
    }

    public function store(Request $request)
    {
        $validator = validator::make($request->all(), [
            'nama' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $kelas = Kelas::create([
            'nama'   => $request->nama,
        ]);
        return response()->json([
            'success' => true,
            'mesage' => 'Data Berhasil Ditambahkan!',
            'data' => $kelas
        ]);
    }

    public function show($id)
    {
        $kelas = Kelas::find($id);
        return response()->json([
            'success' => true,
            'mesage' => 'Detail Data Guru!',
            'data' => $kelas
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = validator::make($request->all(), [
            'nama' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $kelas = Kelas::find($id);
        $kelas->update([
            'nama'   => $request->nama,
        ]);
        return response()->json([
            'success' => true,
            'mesage' => 'Data Kelas Berhasil Diubah!',
            'data' => $kelas
        ]);
    }

    public function destroy($id)
    {
        $kelas = Kelas::find($id);

        $kelas->delete();
        return response()->json([
            'success' => true,
            'mesage' => 'Data Kelas Berhasil Dihapus!',
            'data' => $kelas
        ]);
    }
}