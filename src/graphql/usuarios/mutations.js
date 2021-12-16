import { gql } from '@apollo/client';

const CAMBIAR_ESTADO = gql`
  mutation CambiarEstadoUsuario($id: String!, $estado: String!) {
    cambiarEstadoUsuario(_id: $id, estado: $estado) {
      identificacion
      nombre
      apellido
      email
      rol
      estado
      _id
    }
  }
`;

export { CAMBIAR_ESTADO };
