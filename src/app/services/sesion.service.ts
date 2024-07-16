import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sesion } from '../models/sesion';
import { environment } from '../enviroments/eviroment';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  private apiUrl = `${environment.apiUrl}/sesiones`;

  constructor(private http: HttpClient) { }

  obtenerSesiones(): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(this.apiUrl);
  }

  obtenerSesionPorId(id: number): Observable<Sesion> {
    return this.http.get<Sesion>(`${this.apiUrl}/${id}`);
  }

  crearSesion(sesion: Sesion): Observable<Sesion> {
    return this.http.post<Sesion>(this.apiUrl, sesion);
  }

  actualizarSesion(sesion: Sesion): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${sesion.id}`, sesion);
  }

  eliminarSesion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
