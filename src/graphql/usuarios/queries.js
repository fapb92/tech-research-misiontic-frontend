import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
  query Query {
    obtenerUsuarios {
      _id
      identificacion
      nombre
      apellido
      email
      rol
      estado
    }
  }
`;

export { GET_USUARIOS };
