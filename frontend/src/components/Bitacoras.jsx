"use clients"

import { useState, useEffect } from 'react';
import axios from 'axios'

const api = 'http://127.0.0.1:8000/api'
export default function Usuario() {

  const [bitacora, setBitacora] = useState([]);

  useEffect(() => {
    getAllBitacora();
  }, []);

  const getAllBitacora = async () => {
    const response = await axios.get(`${api}/bitacora`)
    setBitacora(response.data);
  }

  const deleteBitacora = async (id) => {
    await axios.delete(`${api}/bitacora/${id}`)
    getAllBitacora()
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
        <table className="w-full text-sm text-left text-white  border-collapse">
          <thead className="text-xs  text-white bg-red-600 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th> 
              <th scope="col" className="px-6 py-3">
              Id Usuario
              </th>
              <th scope="col" className="px-6 py-3">
              Bitacora
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
              Hora
              </th>
              <th scope="col" className="px-6 py-3">
                Ip
              </th>
              <th scope="col" className="px-6 py-3">
                So
              </th>
              <th scope="col" className="px-6 py-3">
              Navegador
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {bitacora.map((b) => (
              <tr
                key={b.id}
                className="text-black border-b bg-gray-100  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300"
              >
                <td className="px-6 py-4">{b.id}</td>
                <td className="px-6 py-4">{b.id_usuario}</td> 
                <td className="px-6 py-4">{b.bitacora}</td>
                <td className="px-6 py-4">{b.fecha}</td>
                <td className="px-6 py-2">{b.hora}</td>
                <td className="px-6 py-4">{b.ip}</td>
                <td className="px-6 py-4">{b.so}</td>
                <td className="px-6 py-4">{b.navegador}</td>
                <td className="px-6 py-4">
                  <div className='flex gap-2'> 
                    <button onClick={()=>deleteBitacora(b.id)} className="bg-transparent border border-white text-white font-bold py-0.5 px-1 rounded-full text-xs hover:bg-white hover:text-blue-500"><img src="/delete.svg" alt="" /></button>
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
