import React from 'react'
import "./proyectos.css"

export const Proyectos = () => {
    return (
        <div className="bodyTable">
            <h1 className="titleTable">Proyectos creados en la plataforma</h1>
            <div className="tableFrameProy">
                <table>
                    <thead>
                        <tr>
                            <th className="theader">ID</th>
                            <th className="theader">Nombre</th>
                            <th className="theader">Estado</th>
                            <th className="theader">Fase</th>
                            <th className="theader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tableData">123</td>
                            <td className="tableData">Proyecto 1</td>
                            <td className="tableData">INACTIVO</td>
                            <td className="tableData">NULO</td>
                            <td className="tableData"><button className="btnVerMasProy">Ver más</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
