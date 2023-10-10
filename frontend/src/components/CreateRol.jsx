"use client"
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const api = 'http://127.0.0.1:8000/api/rol'

const CreateRol = () => {
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(api, { nombre });
        navigate('/roles');

    }

    return (
        <div className=''> 
            <form onSubmit={store} className="py-5 px-8">
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
    )
}


export default CreateRol 