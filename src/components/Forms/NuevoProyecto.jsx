import { NavLink, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { CREATE_PROYECTO } from '../../graphql/proyectos/mutations';
import { GET_PROYECTOS } from '../../graphql/proyectos/queries';
import Swal from 'sweetalert2';
import { useAuth } from '../../Authentication/Auth';

const NuevoProyecto = () => {
  const [createProyecto, { /* data, loading, */ error }] = useMutation(
    CREATE_PROYECTO,
    {
      refetchQueries: [{ query: GET_PROYECTOS }],
    }
  );

  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = ({
    nombre,
    presupuesto,
    fechaInicio,
    fechaFin,
    objetivosGenerales,
    objetivosEspecificos,
  }) => {
    createProyecto({
      variables: {
        nombre,
        presupuesto: parseFloat(presupuesto),
        fechaInicio,
        fechaFin,
        objetivosGenerales: [objetivosGenerales],
        objetivosEspecificos: [objetivosEspecificos],
        lider: user._id,
      },
    });

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo crear el proyecto',
      });

      return;
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Creado',
        text: 'Proyecto creado con éxito',
      });
    }

    navigate('/proyectos');
  };

  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words w-3/4 mb-6 mx-auto shadow-lg rounded-lg bg-gray-100 border-0'>
        <div className='rounded-t bg-gray-50 mb-0 px-6 py-6'>
          <div className='text-center flex justify-between'>
            <h6 className='text-gray-700 text-xl font-bold'>Proyectos</h6>
            <NavLink
              className='bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
              to='/proyectos'
            >
              Atras
            </NavLink>
          </div>
        </div>
        <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h6 className='text-gray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              Nuevo Proyecto
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label className='block uppercase text-gray-600 text-xs font-bold mb-2'>
                    Nombre
                  </label>
                  <input
                    name='nombre'
                    type='text'
                    placeholder='Nombre del proyecto'
                    {...register('nombre', {
                      required: {
                        value: true,
                        message: 'El nombre es requerido',
                      },
                    })}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                  {errors.nombre && (
                    <span className='text-red-500 font-bold'>
                      {errors.nombre.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label className='block uppercase text-gray-600 text-xs font-bold mb-2'>
                    Presupuesto
                  </label>
                  <input
                    name='presupuesto'
                    type='Number'
                    placeholder='$ 10.000.000'
                    {...register('presupuesto', {
                      required: {
                        value: true,
                        message: 'El presupuesto es requerido',
                      },
                    })}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                  {errors.presupuesto && (
                    <span className='text-red-500 font-bold'>
                      {errors.presupuesto.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label className='block uppercase text-gray-600 text-xs font-bold mb-2'>
                    Fecha de Inicio
                  </label>
                  <input
                    name='fechaInicio'
                    type='date'
                    {...register('fechaInicio', {
                      required: {
                        value: true,
                        message: 'La fecha de inicio es requerida',
                      },
                    })}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                  {errors.fechaInicio && (
                    <span className='text-red-500 font-bold'>
                      {errors.fechaInicio.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label className='block uppercase text-gray-600 text-xs font-bold mb-2'>
                    Fecha Final
                  </label>
                  <input
                    name='fechaFin'
                    type='date'
                    {...register('fechaFin', {
                      required: {
                        value: true,
                        message: 'La fecha final es requerida',
                      },
                    })}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                  {errors.fechaFin && (
                    <span className='text-red-500 font-bold'>
                      {errors.fechaFin.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <hr className='mt-6 border-b-1 border-gray-300' />

            <h6 className='text-gray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              Objetivos
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label className='block uppercase text-gray-600 text-xs font-bold mb-2'>
                    Objetivos Generales
                  </label>
                  <input
                    name='objetivosGenerales'
                    type='text'
                    placeholder='Objetivo general'
                    {...register('objetivosGenerales', {
                      required: {
                        value: true,
                        message: 'Los objetivos generales son requeridos',
                      },
                    })}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                  {errors.objetivosGenerales && (
                    <span className='text-red-500 font-bold'>
                      {errors.objetivosGenerales.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='w-full lg:w-12/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label className='block uppercase text-gray-600 text-xs font-bold mb-2'>
                    Objetivos específicos
                  </label>
                  <input
                    name='objetivosEspecificos'
                    type='text'
                    placeholder='Objetivo específico'
                    {...register('objetivosEspecificos', {
                      required: {
                        value: true,
                        message: 'Los objetivos específicos son requeridos',
                      },
                    })}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                  {errors.objetivosEspecificos && (
                    <span className='text-red-500 font-bold'>
                      {errors.objetivosEspecificos.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <hr className='mt-6 border-b-1 border-gray-300' />

            <h6 className='text-gray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              Líder
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label className='block uppercase text-gray-600 text-xs font-bold mb-2'>
                    Nombre
                  </label>
                  <input
                    disabled
                    name='lider'
                    type='text'
                    placeholder='lider id'
                    defaultValue={`${user.nombre} ${user.apellido}`}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                </div>
              </div>
            </div>
            <div className='flex'>
              <button className='bg-green-500 ml-auto mr-3 text-white hover:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150'>
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoProyecto;
