import React from 'react';

const ItemProyectos = ({ proyecto }) => {
  const { nombre, presupuesto, estado, fase } = proyecto;

  return (
    <tr>
      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center font-bold text-gray-600'>
        {nombre}
      </th>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        COP <span className='font-bold'>{presupuesto}</span>
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
        <button className='bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'>
          Editar
        </button>
        <button className='bg-gray-700 text-white hover:bg-gray-900 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'>
          Detalles
        
        </button>
        <button className='bg-purple-500 text-white hover:bg-gray-900 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'>
          Inscribirme
        </button>
      </td>
    </tr>
  );
};

export default ItemProyectos;
