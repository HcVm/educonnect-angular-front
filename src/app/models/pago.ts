// import { Usuario } from './usuario';
// import { Membresia } from './membresia';

export interface Pago {
  id?: number;
  usuarioId: string | null;
  membresiaId: string | null;
  monto: number;
  fechaPago: string;
  metodoPago: string;
}
