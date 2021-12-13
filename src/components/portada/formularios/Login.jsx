import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Authentication/Auth'
import style from "./Formularios.module.css"

export const Login = () => {
    const { loginUser } = useAuth()
    let navigate = useNavigate()


    const HandleSubmit = async (e) => {
        e.preventDefault();
        const itemForm = e.target.elements

        await loginUser({
            variables: {
                email: itemForm.email.value,
                password: itemForm.password.value
            },
        })

        // itemForm.email.value = ""
        // itemForm.password.value = ""
        console.log("navegando...");
        navigate("/")
    }

    return (
        <div className={style.formBody}>
            <form
                className={style.formControl}
                onSubmit={(e) => HandleSubmit(e)}>
                <i className="fas fa-sign-in-alt"></i>
                <div className={style.itemsForm}>
                    <label >Correo</label>
                    <input type="email" name="email" />
                </div>
                <div className={style.itemsForm}>
                    <label>Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <div className={style.itemsForm}>
                    <button className={style.btnSumit}>Iniciar Sesión</button>
                </div>
            </form>
        </div >
    )
}
