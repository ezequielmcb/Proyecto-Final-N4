<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
  
    public function index()
    { 
        $usuario = new Usuario(); 
        return $usuario->all();
    }
 
    public function create(Request $request)
    {
        $usuario = new Usuario(); 
        $usuario->clave = $request->clave;
        $usuario->habilitado = $request->habilitado;       
        $usuario->fecha = $request->fecha;       
        $usuario->id_rol = $request->id_rol;
        $usuario->id_persona = $request->id_persona;
        $usuario->save();       
        return $usuario;       
    }

    public function show($id)
    {
        $usuario = new Usuario();
        return $usuario->find($id);
    }

    public function update($id, Request $request)
    {
        $usuario = Usuario::find($id);
        $usuario->clave = $request->clave;
        $usuario->habilitado = $request->habilitado;       
        $usuario->fecha = $request->fecha;       
        $usuario->id_rol = $request->id_rol;
        $usuario->id_persona = $request->id_persona;
        $usuario->save();
        return $usuario;
    }
   
    public function destroy($id)
    {
        $usuario = Usuario::find($id);
        $usuario->delete();
        return $usuario;
    }
}
