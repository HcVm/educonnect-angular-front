import { Usuario } from './usuario';

export interface Asesor {
  id: number;
  usuario_id: number;
  especializacion: string;
  disponibilidad: string;
  tarifa: string;
  nombre: string;
  correo: string;
}
