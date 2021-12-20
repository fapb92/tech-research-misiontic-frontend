import { gql } from '@apollo/client';

const CREATE_INSCRIPCION = gql`
  mutation Mutation($proyecto: String!, $estudiante: String!) {
    crearInscripcion(proyecto: $proyecto, estudiante: $estudiante) {
      _id
    }
  }
`;

export { CREATE_INSCRIPCION };
