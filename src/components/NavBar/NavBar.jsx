import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Authentication/Auth';
import './NavBar.css';

export const NavBar = () => {
  const { user } = useAuth();

  function itemsLi() {
    switch (user.estado) {
      case 'PENDIENTE':
      case 'NO_AUTORIZADO':
        return null;
      case 'AUTORIZADO':
        switch (user.rol) {
          case 'ADMINISTRADOR':
          case 'LIDER':
            return (
              <>
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
              </>
            );
          case 'ESTUDIANTE':
            return (
              <>
                <li className='navBarItems'>
                  <NavLink
                    to='/proyectos'
                    className='navBarLinks'
                    onClick={() => cerrarLista()}
                  >
                    Proyectos
                  </NavLink>
                </li>
              </>
            );
          default:
            return null;
        }
      default:
        return null;
    }
  }

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
          {itemsLi()}
          <li className='navBarItems'>
            <div className='navBarLinksRol'>
              {user.rol.toLowerCase()}
            </div>
          </li>
          <li className='navBarItems'>
            <NavLink
              to='/settings'
              className='navBarLinks'
              onClick={() => cerrarLista()}
            >
              <i className='fas fa-user-cog'></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
