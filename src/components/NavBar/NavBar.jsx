import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  function abrirLista() {
    document.getElementById('navBarList').classList.add('navList_opened');
  }

  function cerrarLista() {
    document.getElementById('navBarList').classList.remove('navList_opened');
  }

  return (
    <div className='centerNavBar'>
      <nav className='navBar'>
        <div className='navBarLogo'>
          <span className='logoText logoFirst'>Tech</span>
          <span className='logoText logoSecond'>Research</span>
        </div>

        <button className='openMenu' onClick={() => abrirLista()}>
          <i className='fas fa-bars'></i>
        </button>

        <ul className='navBarList' id='navBarList'>
          <button className='closeMenu' onClick={() => cerrarLista()}>
            <i className='fas fa-times'></i>
          </button>
          <li className='navBarItems'>
            <NavLink
              to='/usuarios'
              className='navBarLinks'
              onClick={() => cerrarLista()}
            >
              Usuarios
            </NavLink>
          </li>
          <li className='navBarItems'>
            <NavLink
              to='/proyectos'
              className='navBarLinks'
              onClick={() => cerrarLista()}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <button className='btnSignOut'>Cerrar Sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
