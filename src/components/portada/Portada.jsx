import React from 'react'
import { Link, Routes } from 'react-router-dom'
import "./portada.css"

export const Portada = () => {
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



    return (
        <div className="bodyPortada">
            <div className="titlePortada">
                <span className="titleWelcome">Bienvenido</span>
                <span className="titleName">Tech Research</span>
            </div>

            <ul className="buttonsLoginReg">
                <li>
                    <Link to="" className="btnSelect btnSelectActive" id="loginSection">Inicio Sesión</Link>
                </li>
                <li>
                    <Link to="" className="btnSelect" id="RegistroSection">Registrarse</Link>
                </li>
            </ul>

            <Routes>

            </Routes>


        </div>
    )
}
