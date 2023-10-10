<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use Illuminate\Http\Request;

class BitacoraController extends Controller
{
    public function index()
    {
        return Bitacora::all();
    }

    public function create(Request $request)
    {
        $nuevabitacora = new bitacora();
        $nuevabitacora->id_usuario = $request->id_usuario;
        $nuevabitacora->bitacora = $request->bitacora;
        $nuevabitacora->fecha = $request->fecha;
        $nuevabitacora->hora = $request->hora;
        $nuevabitacora->ip = $request->ip;
        $nuevabitacora->so = $request->so;
        $nuevabitacora->navegador = $request->navegador;
        $nuevabitacora->save();
        return $nuevabitacora;
    }

    public function show(Request $request)
    {
        return Bitacora::find($request->id);
    }
    public function update(Request $request)
    {
        $bitacora =  bitacora::find($request->id);
        $bitacora->id_usuario = $request->id_usuario;
        $bitacora->bitacora = $request->bitacora;
        $bitacora->fecha = $request->fecha;
        $bitacora->hora = $request->hora;
        $bitacora->ip = $request->ip;
        $bitacora->so = $request->so;
        $bitacora->navegador = $request->navegador;
        $bitacora->navegador = $request->navegador;
        $bitacora->save();
        return "registro actualizado";
    }
}
