import { useReducer } from 'react';

import UsuariosContext from './UsuariosContext';
import UsuariosReducer from './UsuariosReducer';

const UsuariosState = (props) => {
  const initialState = {
    usuarios: [],
    user: null,
    token: null,
    autenticado: null,
  };

  const [state, dispatch] = useReducer(UsuariosReducer, initialState);

  const { usuarios, user } = state;

  const getUsuarios = (data) => {
    console.log(data);
    dispatch({ type: 'GET_USUARIOS', payload: data });
  };

  const setUser = (data) => {
    console.log(data);
    dispatch({ type: 'SET_USER', payload: data });
  };

  return (
    <UsuariosContext.Provider value={{ usuarios, user, getUsuarios, setUser }}>
      {props.children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosState;
