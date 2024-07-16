import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asesor } from '../models/asesor';
import { environment } from '../enviroments/eviroment';

@Injectable({
  providedIn: 'root',
})
export class AsesorService {
  private apiUrl = `${environment.apiUrl}/asesores`;

  constructor(private http: HttpClient) { }

  obtenerAsesores(): Observable<Asesor[]> {
    return this.http.get<Asesor[]>(this.apiUrl);
  }

  obtenerAsesorPorId(id: number): Observable<Asesor> {
    return this.http.get<Asesor>(`${this.apiUrl}/${id}`);
  }

  crearAsesor(asesor: Asesor): Observable<Asesor> {
    return this.http.post<Asesor>(this.apiUrl, asesor);
  }

  actualizarAsesor(asesor: Asesor): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${asesor.id}`, asesor);
  }

  eliminarAsesor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
