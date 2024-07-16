import { Usuario } from './usuario';
import { Asesor } from './asesor';

export interface Sesion {
  id: number;
  estudiante: Usuario;
  asesor: Asesor;
  fecha: Date;
  materia: string;
  estado: 'solicitada' | 'confirmada' | 'cancelada';
}
