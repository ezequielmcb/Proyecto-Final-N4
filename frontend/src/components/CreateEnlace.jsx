"use client"
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const api = 'http://127.0.0.1:8000/api/enlace'

const CreateEnlace = () => {
    const [descripcion, setDescripcion] = useState('');
    const [id_rol, setId_rol] = useState(0);
    const [id_pagina, setId_pagina] = useState(0);

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(api, { descripcion, id_pagina, id_rol });
        navigate('/enlaces');

    }

    return (
        <div className=''>
          <form onSubmit={store} className="py-5 px-8">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID rol</label>
                            <input
                                value={id_rol}
                                onChange={(e) => setId_rol(e.target.value)} 
                                type="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />

                        </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID pagina</label>
                        <input 
                        value={id_pagina} 
                        onChange={(e) => setId_pagina(e.target.value)} 
                        type="number" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </div>

                    </div>
                    <div className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Descripcion</label>
                            <input
                                value={descripcion} 
                                onChange={(e) => setDescripcion(e.target.value)}
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />
                        </div>
                   
                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5" type="submit">Save</button>
                </form>
        </div>
    )
}


export default CreateEnlace 