import React from 'react'
import "./formularios.css"

export const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="formBody">
            <form
                className="formControl"
                onSubmit={(e) => handleSubmit(e)}>
                <i class="fas fa-sign-in-alt"></i>
                <div className="itemsForm">
                    <label for="email">Correo</label>
                    <input type="email" name="email" />
                </div>
                <div className="itemsForm">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <div className="itemsForm">
                    <button className="btnSumit">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
}
