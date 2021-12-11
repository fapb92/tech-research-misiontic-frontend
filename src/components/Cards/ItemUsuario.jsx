import React, { useState } from 'react';

const ItemUsuario = ({ usuario }) => {
  const { _id, identificacion, nombre, apellido, email, rol, estado } = usuario;
  const [estadoNuevo, setEstadoNuevo] = useState('');

  const handleChange = (e) => {
    setEstadoNuevo(e.target.value);
  };

  const cambiarEstado = (id, estadoNuevo) => {
    if (estadoNuevo.trim() === '') return;
  };

  return (
    <tr>
      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center font-bold text-gray-600'>
        {identificacion}
      </th>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <span className='font-bold'>{nombre}</span>
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <span className='font-bold'>{apellido}</span>
      </td>
      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center font-bold text-gray-600'>
        {email}
      </th>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <i
          className={
            'fas fa-circle mr-2 ' +
            (estado === 'PENDIENTE' && 'text-yellow-500 ') +
            (estado === 'AUTORIZADO' && ' text-green-500 ') +
            (estado === 'NO_AUTORIZADO' && ' text-red-500 ')
          }
        ></i>
        {estado}
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        {rol}
      </td>
      <td>
        <select
          onChange={handleChange}
          className='bg-gray-100 text-gray-900 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'
        >
          <option value=''>--SELECCIONAR--</option>
          <option value='AUTORIZADO'>Autorizado</option>
          <option value='NO_AUTORIZADO'>No autorizado</option>
        </select>
        <button
          onClick={() => cambiarEstado(_id, estadoNuevo)}
          className='bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'
        >
          Cambiar
        </button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
