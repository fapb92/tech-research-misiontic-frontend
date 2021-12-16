const Enum_EstadoUsuario = {
  PENDIENTE: 'PENDIENTE',
  NO_AUTORIZADO: 'NO_AUTORIZADO',
  AUTORIZADO: 'AUTORIZADO',
};

const Enum_Rol = {
  ADMINISTRADOR: 'ADMINISTRADOR',
  LIDER: 'LIDER',
  ESTUDIANTE: 'ESTUDIANTE',
};

const Enum_EstadoInscripcion = {
  ACEPTADA: 'ACEPTADA',
  RECHAZADA: 'RECHAZADA',
  PENDIENTE: 'PENDIENTE',
};

const Enum_FaseProyecto = {
  INICIADO: 'INICIADO',
  DESARROLLO: 'DESARROLLO',
  TERMINADO: 'TERMINADO',
  NULO: '',
};

const Enum_EstadoProyecto = {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO',
};

export {
  Enum_EstadoUsuario,
  Enum_Rol,
  Enum_EstadoInscripcion,
  Enum_FaseProyecto,
  Enum_EstadoProyecto,
};
