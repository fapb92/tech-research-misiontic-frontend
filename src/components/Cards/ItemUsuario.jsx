import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CAMBIAR_ESTADO } from '../../graphql/usuarios/mutations';
import { Enum_EstadoUsuario } from '../../utils/enums';
import Swal from 'sweetalert2';

const ItemUsuario = ({ usuario }) => {
  const { _id, identificacion, nombre, apellido, email, rol, estado } = usuario;
  const [estadoNuevo, setEstadoNuevo] = useState('');

  const [mutateEstado, { data, loading, error }] = useMutation(CAMBIAR_ESTADO);

  const handleChange = (e) => {
    setEstadoNuevo(e.target.value);
  };

  const cambiarEstado = (estadoNuevo) => {
    if (estadoNuevo.trim() === '') return;

    Swal.fire({
      title: '¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cambiar!',
    }).then((result) => {
      if (result.isConfirmed) {
        mutateEstado({
          variables: { id: _id, estado: estadoNuevo },
        });
        Swal.fire('Actualizado!', 'El estado ha sido actualizado', 'success');
      }
    });
  };

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo actualizar el estado',
    });

    return <p>Error</p>;
  }

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
          <option value={Enum_EstadoUsuario.AUTORIZADO}>Autorizado</option>
          <option value={Enum_EstadoUsuario.NO_AUTORIZADO}>
            No Autorizado
          </option>
        </select>
        <button
          onClick={() => cambiarEstado(estadoNuevo)}
          className='bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'
        >
          Cambiar
        </button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
