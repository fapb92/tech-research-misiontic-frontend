import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
  query Query {
    obtenerProyectos {
      _id
      nombre
      objetivosGenerales
      objetivosEspecificos
      presupuesto
      fechaInicio
      fechaFin
      estado
      fase
      lider {
        _id
        identificacion
        nombre
        apellido
      }
    }
  }
`;

const GET_PROYECTO = gql`
  query Query($id: ID!) {
    obtenerProyecto(_id: $id) {
      _id
      nombre
      objetivosGenerales
      objetivosEspecificos
      presupuesto
      fechaInicio
      fechaFin
      estado
      fase
      lider {
        _id
        identificacion
        nombre
        apellido
      }
    }
  }
`;

export { GET_PROYECTOS, GET_PROYECTO };
