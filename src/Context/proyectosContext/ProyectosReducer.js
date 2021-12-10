import { GET_PROYECTOS } from '../../graphql/proyectos/queries';

const ProyectosReducer = (state, action) => {
  switch (action.type) {
    case GET_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    default:
      return state;
  }
};

export default ProyectosReducer;
