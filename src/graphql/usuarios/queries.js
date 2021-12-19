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

const GET_UNSOLOUSUARIO = gql`
query ObtenerUsuario($id: ID!) {
obtenerUsuario(_id: $id) {
  identificacion
  nombre
  apellido
  email
  rol
}

}`;

export { GET_USUARIOS, GET_UNSOLOUSUARIO };
