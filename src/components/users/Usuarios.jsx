import React from 'react'
import "./usuarios.css"

export const Usuarios = () => {
    return (
        <div className="bodyTable">
            <h1 className="titleTable">Usuarios registrados en la plataforma</h1>
            <div className="tableFrame">
                <table>
                    <thead>
                        <tr>
                            <th className="theader">Identificación</th>
                            <th className="theader">Nombre</th>
                            <th className="theader">Apellido</th>
                            <th className="theader">Correo</th>
                            <th className="theader">Rol</th>
                            <th className="theader">Estado</th>
                            <th className="theader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tableData">123456789</td>
                            <td className="tableData">Pepito</td>
                            <td className="tableData">Suarez</td>
                            <td className="tableData">correo@email.com</td>
                            <td className="tableData">ADMINISTRADOR</td>
                            <td className="tableData">PENDIENTE</td>
                            <td className="tableData"><button>Aceptar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
