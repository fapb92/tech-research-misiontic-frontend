import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Authentication/Auth'
import "./formularios.css"

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
        console.log("navegando...");
        navigate("/")
    }

    return (
        <div className="formBody">
            <form
                className="formControl"
                onSubmit={(e) => HandleSubmit(e)}>
                <i className="fas fa-sign-in-alt"></i>
                <div className="itemsForm">
                    <label >Correo</label>
                    <input type="email" name="email" />
                </div>
                <div className="itemsForm">
                    <label>Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <div className="itemsForm">
                    <button className="btnSumit">Iniciar Sesión</button>
                </div>
            </form>
        </div >
    )
}
