import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { useAuth } from '../../Authentication/Auth'
import { LogOutButton } from '../../components/NavBar/LogOutButton'
import { GET_UNSOLOUSUARIO } from '../../graphql/usuarios/queries'

export const Info = () => {
    const [identificacion, setIdentificacion] = useState("")
    const [nombres, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [email, setEmail] = useState("")
    const [rol, setRol] = useState("")
    const { user } = useAuth()

    const { data, loading, error } = useQuery(GET_UNSOLOUSUARIO, {
        variables: {
            id: user._id
        }
    })

    useEffect(() => {
        if (data) {
            setIdentificacion(data.obtenerUsuario.identificacion)
            setNombre(data.obtenerUsuario.nombre)
            setApellidos(data.obtenerUsuario.apellido)
            setEmail(data.obtenerUsuario.email)
            setRol(data.obtenerUsuario.rol)
        }
    }, [data])


    return (
        <div className=''>
            <div className='bg-gray-100 text-center mx-auto w-5/6 min-w-400 shadow-xl rounded-xl '>
                <h1 className='pt-6 text-3xl font-bold'>Información de usuario</h1>
                <div className='flex flex-wrap place-content-center pt-6 text-lg'>
                    <div className='flex flex-col items-center m-6 w-2/5'>
                        <label className='font-semibold'>Identificación</label>
                        <input
                            type="text"
                            className='w-full shadow rounded-xl border-2 border-indigo-300 p-2 text-center'
                            readOnly={true}
                            value={identificacion}
                        />
                    </div>
                    <div className='flex flex-col items-center m-6 w-2/5'>
                        <label className='font-semibold'>Nombres</label>
                        <input
                            type="text"
                            className='w-full shadow rounded-xl border-2 border-indigo-300 p-2 text-center'
                            readOnly={true}
                            value={nombres}
                        />
                    </div>
                    <div className='flex flex-col items-center m-6 w-2/5'>
                        <label className='font-semibold'>Apellidos</label>
                        <input
                            type="text"
                            className='w-full shadow rounded-xl border-2 border-indigo-300 p-2 text-center'
                            readOnly={true}
                            value={apellidos}
                        />
                    </div>
                    <div className='flex flex-col items-center m-6 w-2/5'>
                        <label className='font-semibold'>Correo</label>
                        <input
                            type="text"
                            className='w-full shadow rounded-xl border-2 border-indigo-300 p-2 text-center'
                            readOnly={true}
                            value={email}
                        />
                    </div>
                    <div className='flex flex-col items-center m-6 w-2/5'>
                        <label className='font-semibold'>Rol</label>
                        <input
                            type="text"
                            className='w-full shadow rounded-xl border-2 border-indigo-300 p-2 text-center'
                            readOnly={true}
                            value={rol}
                        />
                    </div>
                </div>
                <LogOutButton className="p-2 shadow bg-red-600 rounded-xl text-white font-bold mb-4">
                    Cerrar Sesión
                </LogOutButton>
            </div>
        </div>
    )
}
