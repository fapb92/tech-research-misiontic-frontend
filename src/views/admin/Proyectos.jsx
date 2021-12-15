import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS } from '../../graphql/proyectos/queries';

import ProyectosContext from '../../Context/proyectosContext/ProyectosContext';

import TablaProyectos from '../../components/Cards/TablaProyectos';

const Proyectos = () => {
  const proyectosContext = useContext(ProyectosContext);
  const { getProyectos } = proyectosContext;

  const { data, loading } = useQuery(GET_PROYECTOS);

  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    console.log('useEffect desde proyectos');
    if (!loading) {
      getProyectos(data);
      setProyectos(data.obtenerProyectos);
    }
  }, [data, loading]);

  return (
    <div className='flex flex-wrap mt4'>
      <div className='w-full mb-12 px-4'>
        <TablaProyectos proyectos={proyectos} />
      </div>
    </div>
  );
};

export default Proyectos;
