"use client"
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const api = 'http://127.0.0.1:8000/api/usuario'

const CreateUser = () => {
    const [clave, setClave] = useState(''); 
    const [fecha, setFecha] = useState(''); 
    const [habilitado, setHabilitado] = useState(''); 
    const [id_rol, setId_rol] = useState(0); 
    const [id_persona, setId_persona] = useState(0); 

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(api, { clave, fecha, habilitado, id_persona, id_rol });
        navigate('/usuarios');
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
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />

                        </div>

                        <div className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID persona</label>
                            <input
                                value={id_persona} 
                                onChange={(e) => setId_persona(e.target.value)}
                                type="number"
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />
                        </div>

                    </div>

                    <div className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Clave</label>
                        <input value={clave} onChange={(e) => setClave(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Habilitado</label>
                        <input
                            value={habilitado}
                            onChange={(e) => setHabilitado(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                        <input
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5" type="submit">Save</button>
                </form>
        </div>
    )
}


export default CreateUser 