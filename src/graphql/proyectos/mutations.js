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

export { CREATE_PROYECTO };
