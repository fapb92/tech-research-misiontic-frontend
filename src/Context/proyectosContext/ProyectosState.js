import { useReducer } from 'react';

import ProyectosContext from './ProyectosContext';
import ProyectosReducer from './ProyectosReducer';

import { GET_PROYECTOS } from '../../graphql/proyectos/queries';

const ProyectosState = (props) => {
  const initialState = {
    proyectos: [],
  };

  const [state, dispatch] = useReducer(ProyectosReducer, initialState);

  const { proyectos } = state;

  const getProyectos = (data) => {
    console.log(data);
    dispatch({ type: GET_PROYECTOS, payload: data.obtenerProyectos });
  };

  return (
    <ProyectosContext.Provider value={{ proyectos, getProyectos }}>
      {props.children}
    </ProyectosContext.Provider>
  );
};

export default ProyectosState;
