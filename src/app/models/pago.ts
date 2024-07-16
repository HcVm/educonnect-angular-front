import { Usuario } from './usuario';
import { Membresia } from './membresia';

export interface Pago {
  id: number;
  usuario: Usuario;
  membresia: Membresia;
  monto: number;
  fecha_pago: Date;
  metodo_pago: string;
}
