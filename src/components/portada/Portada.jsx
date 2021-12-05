import React, { useEffect, useState } from 'react'
import { Login } from './formularios/Login'
import { Registro } from './formularios/Registro'
import "./portada.css"

export const Portada = () => {
    // Se establece el estado de la seleccion de lo botones
    //  si es true muestra el login si es false muestra el registro
    const [selection, setSelection] = useState(true)

    const handleLogin = () => {
        setSelection(true)
    }

    const handleRegistro = () => {
        setSelection(false)
    }

    useEffect(() => {
        const loginSection = document.getElementById("loginSection");
        const RegistroSection = document.getElementById("RegistroSection");

        loginSection.addEventListener("click", function () {
            loginSection.classList.add("btnSelectActive");
            RegistroSection.classList.remove("btnSelectActive");
        });

        RegistroSection.addEventListener("click", function () {
            RegistroSection.classList.add("btnSelectActive");
            loginSection.classList.remove("btnSelectActive");
        });
    }, [])

    return (
        <div className="bodyPortada">
            <div className="titlePortada">
                <span className="titleWelcome">Bienvenido</span>
                <span className="titleName">Tech Research</span>
            </div>

            <ul className="buttonsLoginReg">
                <li>
                    <button
                        className="btnSelect btnSelectActive"
                        id="loginSection"
                        onClick={() => handleLogin()}>Ingresar</button>
                </li>
                <li>
                    <button
                        className="btnSelect"
                        id="RegistroSection"
                        onClick={() => handleRegistro()}>Registrarse</button>
                </li>
            </ul>
            {selection ? <Login /> : <Registro />}


        </div>
    )
}
