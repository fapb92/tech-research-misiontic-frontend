import { gql } from '@apollo/client';

const CREATE_PROYECTO = gql`
  mutation Mutation(
    $nombre: String!
    $objetivosGenerales: [String]!
    $objetivosEspecificos: [String]!
    $presupuesto: Float!
    $fechaInicio: Date!
    $fechaFin: Date!
    $lider: String!
  ) {
    crearProyecto(
      nombre: $nombre
      objetivosGenerales: $objetivosGenerales
      objetivosEspecificos: $objetivosEspecificos
      presupuesto: $presupuesto
      fechaInicio: $fechaInicio
      fechaFin: $fechaFin
      lider: $lider
    ) {
      _id
      nombre
    }
  }
`;

const UPDATE_PROYECTO = gql`
  mutation Mutation(
    $id: ID!
    $nombre: String
    $objetivosGenerales: [String]
    $objetivosEspecificos: [String]
    $presupuesto: Float
    $fechaInicio: Date
    $fechaFin: Date
    $estado: Enum_EstadoProyecto
    $fase: Enum_FaseProyecto
  ) {
    editarProyecto(
      _id: $id
      nombre: $nombre
      objetivosGenerales: $objetivosGenerales
      objetivosEspecificos: $objetivosEspecificos
      presupuesto: $presupuesto
      fechaInicio: $fechaInicio
      fechaFin: $fechaFin
      estado: $estado
      fase: $fase
    ) {
      _id
      nombre
    }
  }
`;

export { CREATE_PROYECTO, UPDATE_PROYECTO };
