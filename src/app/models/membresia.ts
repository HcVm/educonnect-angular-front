export interface Membresia {
  id: number;
  usuario_id: number;
  nombre: 'Basica' | 'Premium';
  descripcion: string;
  precio: number;
  fecha_inicio: Date;
  fecha_fin: Date;
}