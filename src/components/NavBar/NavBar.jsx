import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="centerNavBar">
      <nav className="navBar">
        <div className="navBarLogo">
          <span className="logoText logoFirst">Tech</span>
          <span className="logoText logoSecond">Research</span>
        </div>

        <button className="openMenu">
          <i className="fas fa-bars"></i>
        </button>

        <ul className="navBarList">
          <button className="closeMenu">
            <i className="fas fa-times"></i>
          </button>
          <li className="navBarItems">
            <NavLink to="" className="navBarLinks">
              Usuarios
            </NavLink>
          </li>
          <li className="navBarItems">
            <NavLink to="" className="navBarLinks">
              Proyectos
            </NavLink>
          </li>
          <li>
            <button className="btnSignOut">Cerrar Sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
