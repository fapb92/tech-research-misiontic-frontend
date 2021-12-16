import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
  query Query {
    obtenerProyectos {
      _id
      nombre
      objetivosGenerales
      objetivosEspecificos
      presupuesto
      estado
      fase
      lider {
        _id
        identificacion
        nombre
      }
    }
  }
`;

export { GET_PROYECTOS };
