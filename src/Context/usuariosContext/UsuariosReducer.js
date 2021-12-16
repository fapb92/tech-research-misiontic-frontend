const UsuariosReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USUARIOS':
      return {
        ...state,
        usuarios: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default UsuariosReducer;
