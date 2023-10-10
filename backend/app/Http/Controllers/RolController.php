<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    public function index()
    { 
        $rol = new Rol(); 
        return $rol->all();
    }
 
    public function create(Request $request)
    {
        $rol = new Rol(); 
        $rol->nombre = $request->nombre;
        $rol->save();       
        return $rol;       
    }

    public function show($id)
    {
        $rol = new Rol();
        return $rol->find($id);
    }

    public function update($id, Request $request)
    {
        $rol = Rol::find($id);        
        $rol->nombre = $request->nombre;
        $rol->save();
        return $rol;
    }
   
    public function destroy($id)
    {
        $rol = Rol::find($id);
        $rol->delete();
        return $rol;
    }
}
