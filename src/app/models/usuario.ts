export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  contraseña?: string;
  tipo: 'estudiante' | 'asesor';
}