"use clients"

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const api = 'http://127.0.0.1:8000/api/'
export default function Usuarios() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${api}usuario`)
    setUsers(response.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`${api}usuario/${id}`)
    getAllUsers()
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
          <Link to="/create" className='text-black flex items-center text-base ' >Crear Usuario
          <img src="/add.svg" alt="add" />
          </Link>
        <table className="w-full text-sm text-left text-white  border-collapse">
          <thead className="text-xs  text-white bg-red-600 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Clave
              </th>
              <th scope="col" className="px-6 py-3">
                Habilitado
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                id_rol
              </th>
              <th scope="col" className="px-6 py-3">
                id_persona
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="text-black border-b bg-gray-100  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300"
              >
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.clave}</td> 
                <td className="px-6 py-4">{user.habilitado}</td>
                <td className="px-6 py-4">{user.fecha}</td>
                <td className="px-6 py-2">{user.id_rol}</td>
                <td className="px-6 py-4">{user.id_persona}</td>
                <td className="px-6 py-4">
                  <div className='flex gap-2'> 
                    <Link to={`/edit/usuario/${user.id}`}> <button  className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500">
                      <img src="/edit.svg" alt="" />
                    </button></Link>
                    <button onClick={()=>deleteUser(user.id)} className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500"><img src="/delete.svg" alt="" /></button>
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
