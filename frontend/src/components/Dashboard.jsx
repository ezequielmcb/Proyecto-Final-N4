"use client"
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "/css/bg.css"
import Parametros from "./Parametros";
import Roles from "./Roles";
import Usuarios from "./Usuarios";
import Bitacoras from "./Bitacoras";
import Enlaces from "./Enlaces";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import EditEnlace from "./EditEnlace";
import CreateEnlace from "./CreateEnlace";
import CreateRol from "./CreateRol";
import EditRol from "./EditRol";

export default function Dashboard() {

    const [addHidden, setHidden] = useState(true);
    const toggleDrawer = () => {
        setHidden(!addHidden);
    };
    const hidden = addHidden ? 'hidden' : '';

    const [openMenu, setOpenMenu] = useState(true);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="h-screen flex relative bg-stone-200">
            <BrowserRouter>
                <section className={`bg-gray-800 h-screen w-[20%] flex flex-col items-center gap-16 pt-16 fixed left-0 ${openMenu ? '' : 'hidden'}`}>
                    <div className="bg-gray-600 pt-2 w-10/12 ">
                        <div className="flex items-center gap-3 bg-gray-800 p-1">
                            <img width="30" height="30" src="/menu.svg" alt="" className=" " />
                            <h1 className="text-white">General y Seguridad</h1>
                            <img src="/flecha.svg" alt="" />
                        </div>
                        <ul className="flex flex-col gap-2 text-white p-3">
                            <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/parametros">
                                <li className="flex items-center gap-3">
                                    <img width="30" height="30" src="/para.svg" />
                                    <h2>Parametros</h2>
                                </li>
                            </NavLink>
                            <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/roles">
                                <li className="flex items-center gap-3">
                                    <img width="30" height="30" src="/roles.svg" alt="plus-math" />
                                    <h2>Roles</h2>
                                </li>
                            </NavLink>
                            <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/usuarios">
                                <li className="flex items-center gap-3">
                                    <img width="30" height="30" src="/usuarios.svg" alt="plus-math" />
                                    <h2>Usuarios</h2>
                                </li>
                            </NavLink>
                            <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/bitacoras">
                                <li className="flex items-center gap-3">
                                    <img width="30" height="30" src="/bitacoras.svg" alt="plus-math" />
                                    <h2>Bitacoras</h2>
                                </li>
                            </NavLink>
                            <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/enlaces">
                                <li className="flex items-center gap-3">
                                    <img width="30" height="30" src="/links.svg" alt="plus-math" />
                                    <h2>Enlaces</h2>
                                </li>
                            </NavLink>
                            <NavLink className={({ isActive }) => (isActive ? " border-b-2 border-white " : null)} to="/">
                                <li className="flex items-center gap-3">
                                    <img width="30" height="30" src="/hogar.svg" alt="plus-math" />
                                    <h2>Home</h2>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </section>
                <section className={`px-10 pt-7 ${openMenu ? 'w-[85%] ml-[20%]' : 'w-full'} ${openMenu ? '' : 'px-28'}`}>
                    <button id="closemenu" onClick={toggleMenu} className="cursor-pointer fixed left-2 top-0"><img src={`${openMenu ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nO3YMStGYRQH8OOKgYFJycxnYTHL++7KB6BMisHHsChmZVVGZWSwGH0FCT8p5brZ3nrfznV+9ay3/6nnPs85T0QppZRSyuRhBac4RhOZYBmPfqxHFljCfSv8C1YjAyzirhX+FZuRARZw2wr/hq3IAPO4aYV/xzAywByuW+E/sBMZYBZXnfC7kQFmcOm3vcgA0zjvhD+IROHPOuEPIwM03+1B2xP2x7SGmBqlgK8PTNpglAIG2Qto/thCzzgZ09oeaQul/4k7RVykPEY7t3DOi6wXrUQvmrletNO9GGh6MVJ2hvqHzlC/FsmfVTYi8cPWUbqHrVJKKaX8V59yOcdT9n9lFgAAAABJRU5ErkJggg==' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO3YPQrCQBRF4VPpfiytLSyMC1BSGLNVK7GwcQFWgrV/hUYCU4hoIYGY+7gfvAUcZpiZBMzMzMzMOmgIbNKMELYDqjQ3IEPU/iVEOmYG3D/ETBC0+BIzRZBj1FYmQ5BjfpEDx7elb3MuwJiGesD5jxFVmmvTe6YPnCKE1ObAQX1rtamI8HQpItwlS0d0RBnhBVxGiMiBh/rpFOpTdxshojYAVsBa/XeQmZmZmaHlCeC06ncEGe4qAAAAAElFTkSuQmCC'}`} /></button>
                    <div className="flex justify-between pb-7">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <h1 className="text-4xl " >Dashboard Evaluador</h1>
                                }
                            />
                            <Route
                                path="/parametros"
                                element={
                                    <h1 className="text-4xl">Parametros</h1>
                                }
                            />
                            <Route
                                path="/roles"
                                element={
                                    <h1 className="text-4xl">Roles</h1>
                                }

                            />

                            <Route
                                path="/usuarios"
                                element={
                                    <h1 className="text-4xl ">Usuarios</h1>
                                }
                            />
                            <Route
                                path="/bitacoras"
                                element={
                                    <h1 className="text-4xl">Bitacoras</h1>
                                }
                            />
                            <Route
                                path="/enlaces"
                                element={
                                    <h1 className="text-4xl">Enlaces</h1>
                                }
                            />
                        </Routes>
                        <button onClick={toggleDrawer} className="cursor-pointer"><img width="35" height="35" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" /></button>
                        <div id="drawer" className={`gradient-bg absolute cursor-pointer right-8 top-[90px] w-34 text-white text-lg p-3 px-4 rounded-2xl  ${hidden}`}>
                            <div className="flex gap-2 ">
                                <img width={20} src="/perfil.svg" />
                                <h1>Perfil</h1>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img width={20} src="/logout.svg" />
                                <h1>Logout</h1>
                            </div>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element=
                            {<div className="bg-white w-[50rem] font-semibold text-sm p-4 rounded-md">
                                <p>Bienvenido, a la izquierda selecciona una seccion.</p>
                            </div>}
                        />
                        <Route path="/Parametros" element={<Parametros />} />
                        <Route path="/Roles" element={<Roles />} />
                        <Route path="/Usuarios" element={<Usuarios />} />
                        <Route path="/Bitacoras" element={<Bitacoras />} />
                        <Route path="/Enlaces" element={<Enlaces />} />
                        <Route path="/create" element={<CreateUser />} />
                        <Route path="/create/rol" element={<CreateRol />} />
                        <Route path="/create/Enlace" element={<CreateEnlace />} />
                        <Route path="/edit/usuario/:id" element={<EditUser />} />
                        <Route path="/edit/enlace/:id" element={<EditEnlace />} />
                        <Route path="/edit/rol/:id" element={<EditRol />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div >
    )
}
