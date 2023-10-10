"use clients"

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const api = 'http://127.0.0.1:8000/api/'
export default function Roles() {

  const [rol, setRol] = useState([]);

  useEffect(() => {
    getAllRoles();
  }, []); 

  const getAllRoles = async () => {
    const response = await axios.get(`${api}rol`)
    setRol(response.data);
  }

  const deleteRol = async (id) => {
    await axios.delete(`${api}rol/${id}`)
    getAllRoles()
  }
 
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
          <Link to="/create/rol" className='text-black flex items-center text-base ' >
            Crear Rol
          <img src="/add.svg" alt="add" />
          </Link>
        <table className="w-full text-sm text-left text-white  border-collapse">
          <thead className="text-xs  text-white bg-red-600 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
              Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {rol.map((rol) => (
              <tr
                key={rol.id}
                className="text-black border-b bg-gray-100  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300"
              >
                <td className="px-6 py-4">{rol.id}</td> 
                <td className="px-6 py-4">{rol.nombre}</td>
                <td className="px-6 py-4">
                  <div className='flex gap-2'> 
                    <Link to={`/edit/rol/${rol.id}`}> <button  className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500">
                      <img src="/edit.svg" alt="" />
                    </button></Link>
                    <button onClick={()=>deleteRol(rol.id)} className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500"><img src="/delete.svg" alt="" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
    </>
  );
}
