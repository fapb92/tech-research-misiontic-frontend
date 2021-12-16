import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemProyectos from './ItemProyectos';

const TablaProyectos = ({ proyectos }) => {
  return (
    <div className='flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-50'>
      <div className='rounded-t mb-0 px-4 py-3 border-0'>
        <div className='flex flex-wrap items-center'>
          <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
            <h3 className='font-semibold text-lg text-gray-800 '>Proyectos</h3>
          </div>

          <NavLink
            to='/proyectos/nuevo'
            className='bg-green-500 text-white hover:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'
          >
            Nuevo
          </NavLink>
        </div>
      </div>
      <div className='block w-full overflow-x-auto'>
        <table className='items-center w-full bg-transparent border-collapse'>
          <thead>
            <tr>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Nombre
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Presupuesto
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Estado
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Fase
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {proyectos.map((proyecto) => (
              <ItemProyectos key={proyecto._id} proyecto={proyecto} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaProyectos;
