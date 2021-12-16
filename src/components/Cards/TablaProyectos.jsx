import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { GET_PROYECTOS } from '../../graphql/proyectos/queries';
import { useAuth } from '../../Authentication/Auth';
import ItemProyectos from './ItemProyectos';
import Swal from 'sweetalert2';

const TablaProyectos = () => {
  const { data, loading, error } = useQuery(GET_PROYECTOS);
  const { user } = useAuth();

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

  if (user.estado !== 'AUTORIZADO') {
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
            <h3 className='font-semibold text-lg text-gray-800 '>Proyectos</h3>
          </div>

          {user.rol !== 'ESTUDIANTE' && (
            <NavLink
              to='/proyectos/nuevo'
              className='bg-green-500 text-white hover:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1'
            >
              Nuevo
            </NavLink>
          )}
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
            {data.obtenerProyectos.map((proyecto) => (
              <ItemProyectos key={proyecto._id} proyecto={proyecto} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaProyectos;
