export interface Membresia {
  id?: number,
  usuario_id?: string | null;
  nombre: string;
  descripcion: string;
  precio: number;
  fecha_inicio?: string;
  fecha_fin?: string;
}