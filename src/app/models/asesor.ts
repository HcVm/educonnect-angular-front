import { Usuario } from './usuario';

export interface Asesor {
  id: number;
  usuario: Usuario;
  especializacion: string;
  disponibilidad: string;
  tarifa: number;
}
