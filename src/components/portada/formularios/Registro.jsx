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
                <i class="fas fa-user-plus"></i>
                <div className="itemsForm">
                    <label for="Identification">Identificación</label>
                    <input type="text" name="identification" />
                </div>

                <div className="itemsForm">
                    <label for="name">Nombre</label>
                    <input type="text" name="name" />
                </div>

                <div className="itemsForm">
                    <label for="surname">Apellido</label>
                    <input type="text" name="surname" />
                </div>

                <div className="itemsForm">
                    <label for="email">Correo</label>
                    <input type="email" name="email" />
                </div>

                <div className="itemsForm">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" />
                </div>

                <div className="itemsForm">
                    <label for="rpassword">Repetir Contraseña</label>
                    <input type="password" name="rpassword" />
                </div>

                <div className="itemsForm">
                    <label for="rol">Rol</label>
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
