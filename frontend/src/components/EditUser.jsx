"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const api = 'http://127.0.0.1:8000/api/usuario/'

const EditUser = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [clave, setClave] = useState('');
    const [fecha, setFecha] = useState('');
    const [habilitado, setHabilitado] = useState('');
    const [id_rol, setId_rol] = useState(0);
    const [id_persona, setId_persona] = useState(0);

    const update = async (e) => {
        e.preventDefault();
            await axios.put(`${api}${id}`, {
                clave: clave,
                fecha: fecha,
                habilitado: habilitado,
                id_persona: id_persona,
                id_rol: id_rol
            });

            navigate('/usuarios');
    }
    
    useEffect(() => {
        const getUserById = async () => {
            const response = await axios.get(`${api}${id}`)
            setClave(response.data.clave)
            setFecha(response.data.fecha)
            setHabilitado(response.data.habilitado)
            setId_persona(response.data.id_persona)
            setId_rol(response.data.id_rol)
            console.log(response)
        }
        getUserById()
    }, []);
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between px-8">
                    <h2 className=" text-2xl font-normal">Edit Info</h2>
                </div>
                <hr className="border border-gray-200 w-full" />
                <form onSubmit={update} className="py-5 px-8">
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
        </div>
    )
}

export default EditUser