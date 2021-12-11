import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NuevoProyecto = () => {
  const [proyecto, setProyecto] = useState({
    nombre: '',
    presupuesto: '',
    fechaInicio: '',
    fechaFin: '',
    objetivosGenerales: '',
    objetivosEspecificos: '',
    lider: '',
  });

  const handleChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <form onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
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
                    onChange={handleChange}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
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
                    onChange={handleChange}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
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
                    onChange={handleChange}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
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
                    onChange={handleChange}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
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
                    onChange={handleChange}
                    className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
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
                    name='lider'
                    type='text'
                    placeholder='lider id'
                    onChange={handleChange}
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
