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

export { GET_PROYECTOS };
