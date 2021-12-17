import React, { useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import { useAuth } from '../../Authentication/Auth';
import ItemUsuario from './ItemUsuario';
import UsuariosContext from '../../Context/usuariosContext/UsuariosContext';
import Swal from 'sweetalert2';

const TablaUsuarios = () => {
  const usuariosContext = useContext(UsuariosContext);
  const { getUsuarios } = usuariosContext;

  const { user } = useAuth();

  const { data, loading, error } = useQuery(GET_USUARIOS);

  useEffect(() => {
    console.log('useEffect desde usuarios');
    if (!loading && !error) {
      getUsuarios(data.obtenerUsuarios);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);

  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al cargar los datos!',
    });

    return (
      <p className='mt-2 bg-gray-200 text-center rounded font-medium truncate text-gray-800'>
        Error
      </p>
    );
  }

  if (loading)
    return (
      <p className='mt-2 bg-gray-200 text-center rounded font-medium truncate text-gray-800'>
        Cargando...
      </p>
    );

  if (
    user.rol === 'ESTUDIANTE' ||
    user.rol === 'LIDER' ||
    user.estado === 'NO_AUTORIZADO' ||
    user.estado === 'PENDIENTE'
  ) {
    return (
      <p className='mt-2 bg-gray-200 text-center rounded font-medium truncate text-gray-800'>
        {`El usuario ${user.nombre} ${user.apellido} no esta autorizado`}
      </p>
    );
  }

  return (
    <div className='flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-50'>
      <div className='rounded-t mb-0 px-4 py-3 border-0'>
        <div className='flex flex-wrap items-center'>
          <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
            <h3 className='font-semibold text-lg text-gray-800 '>Usuarios</h3>
          </div>
        </div>
      </div>
      <div className='block w-full overflow-x-auto'>
        <table className='items-center w-full bg-transparent border-collapse'>
          <thead>
            <tr>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                No. Identificación
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Nombre
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Apellido
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Correo
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Estado
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Rol
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-200 text-gray-600 border-gray-200'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data.obtenerUsuarios.map((usuario) => (
              <ItemUsuario key={usuario._id} usuario={usuario} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaUsuarios;
