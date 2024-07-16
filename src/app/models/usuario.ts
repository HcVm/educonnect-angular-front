export interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    contraseña?: string;
    tipo: 'estudiante' | 'asesor';
    membresia_id?: number;
    fecha_inicio_membresia?: Date;
    fecha_fin_membresia?: Date;
  }
  