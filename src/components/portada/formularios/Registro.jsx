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
                    <input type="text" name="identification" placeholder='Ingrese número de identificación' required/>
                </div>

                <div className="itemsForm">
                    <label for="name">Nombres</label>
                    <input type="text" name="name" placeholder='Ingrese Nombres' required/>
                </div>

                <div className="itemsForm">
                    <label for="surname">Apellidos</label>
                    <input type="text" name="surname" placeholder='Ingrese Apellidos' required/>
                </div>

                

                <div className="itemsForm">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" placeholder='Ingrese Contraseña' required/>
                </div>

                <div className="itemsForm">
                    <label for="rpassword">Repetir Contraseña</label>
                    <input type="password" name="rpassword" placeholder='Ingrese Contraseña' required/>
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
