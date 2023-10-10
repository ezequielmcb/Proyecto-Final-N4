"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const api = 'http://127.0.0.1:8000/api/rol/'

const EditRol = () => {
    const { id } = useParams(); 

    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');

    const update = async (e) => {
        e.preventDefault();
            await axios.put(`${api}${id}`, {
                nombre: nombre,
                id: id,
            });

            navigate('/roles');
    }
    
    useEffect(() => {
        const getLinkById = async () => {
            const response = await axios.get(`${api}${id}`)
            setNombre(response.data.nombre)
        }
        getLinkById()
    }, []);
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between px-8">
                    <h2 className=" text-2xl font-normal">Edit Rol</h2>
                </div>
                <hr className="border border-gray-200 w-full" />
                <form onSubmit={update} className="py-5 px-8">
                        <div className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID rol</label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)} 
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />
                        </div>
                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditRol