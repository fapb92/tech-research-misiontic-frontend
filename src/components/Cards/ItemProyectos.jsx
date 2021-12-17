import React from 'react';
import { Link } from 'react-router-dom';

const ItemProyectos = ({ proyecto }) => {
  const { _id, nombre, presupuesto, fechaInicio, fechaFin, estado, fase } =
    proyecto;

  return (
    <tr>
      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center font-bold text-gray-600'>
        {nombre}
      </th>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        COP <span className='font-bold'>{presupuesto}</span>
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        {fechaInicio.slice(0, 10)}
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        {fechaFin.slice(0, 10)}
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <i
          className={
            'fas fa-circle mr-2 ' +
            (estado === 'ACTIVO' ? 'text-green-500' : 'text-red-500')
          }
        ></i>
        {estado}
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        {fase}
      </td>
      <td>
        <Link
          to={`/proyectos/detalle/${_id}`}
          className='bg-gray-700 text-white hover:bg-gray-900 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'
        >
          Detalles
        </Link>
      </td>
    </tr>
  );
};

export default ItemProyectos;
