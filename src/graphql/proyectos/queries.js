import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
  query Query {
    obtenerProyectos {
      _id
      nombre
      objetivosGenerales
      objetivosEspecificos
      presupuesto
      # fechaInicio
      # fechaFin
      estado
      fase
      lider {
        identificacion
        nombre
      }
    }
  }
`;

const GET_NOMBRE = gql`
  query Query {
    obtenerProyectos {
      _id
      nombre
    }
  }
`;

export { GET_PROYECTOS, GET_NOMBRE };
