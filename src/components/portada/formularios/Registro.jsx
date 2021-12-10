import React from 'react'
import "./formularios.css"

export const Registro = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="formBody">
            <form
                className="formControl"
                onSubmit={(e) => handleSubmit(e)}>
                <i className="fas fa-user-plus"></i>
                <div className="itemsForm">
                    <label >Identificación</label>
                    <input type="text" name="identification" />
                </div>

                <div className="itemsForm">
                    <label >Nombre</label>
                    <input type="text" name="name" />
                </div>

                <div className="itemsForm">
                    <label >Apellido</label>
                    <input type="text" name="surname" />
                </div>

                <div className="itemsForm">
                    <label >Correo</label>
                    <input type="email" name="email" />
                </div>

                <div className="itemsForm">
                    <label >Contraseña</label>
                    <input type="password" name="password" />
                </div>

                <div className="itemsForm">
                    <label >Repetir Contraseña</label>
                    <input type="password" name="rpassword" />
                </div>

                <div className="itemsForm">
                    <label >Rol</label>
                    <select name="rol">
                        <option value="ESTUDIANTE">Estudiante</option>
                        <option value="LIDER">Lider</option>
                        <option value="ADMINISTRADOR">Administrador</option>
                    </select>
                </div>

                <div className="itemsForm">
                    <button className="btnSumit">Hacer Registro</button>
                </div>
            </form>
        </div>
    )
}
