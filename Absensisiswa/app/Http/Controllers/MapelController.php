<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Mapel;
use Illuminate\Support\Facades\Validator;

class MapelController extends Controller
{
    public function index()
    {
        $mapel = Mapel::all();

        return response()->json($hari);
    }

    public function store(Request $request)
    {
        $validator = validator::make($request->all(), [
            'nama' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $mapel = Mapel::create([
            'nama'   => $request->nama,
        ]);
        return response()->json([
            'success' => true,
            'mesage' => 'Data Berhasil Ditambahkan!',
            'data' => $mapel
        ]);
    }

    public function show($id)
    {
        $mapel = Mapel::find($id);
        return response()->json([
            'success' => true,
            'mesage' => 'Detail Data Mapel!',
            'data' => $Mapel
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
        $mapel = Mapel::find($id);
        $mapel->update([
            'nama'   => $request->nama,
        ]);
        return response()->json([
            'success' => true,
            'mesage' => 'Data Mapel Berhasil Diubah!',
            'data' => $mapel
        ]);
    }

    public function destroy($id)
    {
        $mapel = Mapel::find($id);

        $mapel->delete();
        return response()->json([
            'success' => true,
            'mesage' => 'Data Mapel Berhasil Dihapus!',
            'data' => $mapel
        ]);
    }
}