"use clients"

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const api = 'http://127.0.0.1:8000/api/'
export default function Enlace() {

  const [link, setLink] = useState([]);

  useEffect(() => {
    getAllLinks();
  }, []);

  const getAllLinks = async () => {
    const response = await axios.get(`${api}enlace`)
    setLink(response.data);
  }

  const deleteLink = async (id) => {
    await axios.delete(`${api}enlace/${id}`)
    getAllLinks()
  }
 
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
          <Link to="/create/Enlace" className='text-black flex items-center text-base ' >
            Crear Link
          <img src="/add.svg" alt="add" />
          </Link>
        <table className="w-full text-sm text-left text-white  border-collapse">
          <thead className="text-xs  text-white bg-red-600 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
              descripcion
              </th>
              <th scope="col" className="px-6 py-3">
              id_pagina
              </th>
              <th scope="col" className="px-6 py-3">
                id_rol
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {link.map((link) => (
              <tr
                key={link.id}
                className="text-black border-b bg-gray-100  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300"
              >
                <td className="px-6 py-4">{link.id}</td> 
                <td className="px-6 py-4">{link.descripcion}</td>
                <td className="px-6 py-4">{link.id_pagina}</td>
                <td className="px-6 py-2">{link.id_rol}</td>
                <td className="px-6 py-4">
                  <div className='flex gap-2'> 
                    <Link to={`/edit/enlace/${link.id}`}> <button  className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500">
                      <img src="/edit.svg" alt="" />
                    </button></Link>
                    <button onClick={()=>deleteLink(link.id)} className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500"><img src="/delete.svg" alt="" /></button>
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
