import { gql } from '@apollo/client';

const GET_INSCRIPCIONES = gql`
  query Query {
    obtenerInscripciones {
      _id
      proyecto {
        _id
        nombre
      }
      estudiante {
        _id
        identificacion
        nombre
        apellido
      }
      estado
      fechaIngreso
      fechaEgreso
    }
  }
`;

export { GET_INSCRIPCIONES };
