import React, { useState } from 'react'
import { useAuth } from '../../../Authentication/Auth'
import style from "./Formularios.module.css"

export const Login = () => {
    const { loginUser } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (email === "") {
            alert("Por favor ingresa Correo")
            return
        }

        if (password === "") {
            alert("Por favor ingresa la contraseña")
            return
        }

        await loginUser({
            variables: {
                email,
                password
            },
        })

    }

    return (
        <div className={style.formBody}>
            <form
                className={style.formControl}
                onSubmit={(e) => HandleSubmit(e)}>
                <i className="fas fa-sign-in-alt"></i>
                <div className={style.itemsForm}>
                    <label >Correo</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} required placeholder='Ingrese Correo'/>
                </div>
                <div className={style.itemsForm}>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} required placeholder='Ingrese Contraseña'/>
                </div>
                <div className={style.itemsForm}>
                    <button className={style.btnSumit}>Iniciar Sesión</button>
                </div>
            </form>
        </div >
    )
}
