<?php

namespace App\Http\Controllers;

use App\Models\Enlace;
use Illuminate\Http\Request;

class EnlaceController extends Controller
{
    public function index()
    { 
        $enlace = new Enlace(); 
        return $enlace->all();
    }
 
    public function create(Request $request)
    {
        $enlace = new Enlace(); 
        $enlace->descripcion = $request->descripcion;
        $enlace->id_pagina = $request->id_pagina;       
        $enlace->id_rol = $request->id_rol;
        $enlace->save();       
        return $enlace;       
    }

    public function show($id)
    {
        $enlace = new Enlace();
        return $enlace->find($id);
    }

    public function update($id, Request $request)
    {
        $enlace = Enlace::find($id);
        $enlace->descripcion = $request->descripcion;
        $enlace->id_pagina = $request->id_pagina;       
        $enlace->id_rol = $request->id_rol;
        $enlace->save();
        return $enlace;
    }
   
    public function destroy($id)
    {
        $enlace = Enlace::find($id);
        $enlace->delete();
        return $enlace;
    }
}
