import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { catchError } from 'rxjs/operators'; 
import { Membresia } from '../models/membresia';
import { environment } from '../enviroments/eviroment';

@Injectable({
  providedIn: 'root',
})
export class MembresiaService {
  private apiUrl = `${environment.apiUrl}/membresias`;

  constructor(private http: HttpClient) { }

  obtenerMembresias(): Observable<Membresia[]> {
    return this.http.get<Membresia[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error al obtener membresías:', error);
          return throwError(() => error); 
        })
      );
  }

  obtenerMembresiaPorId(id: number): Observable<Membresia> {
    return this.http.get<Membresia>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener membresía por ID:', error);
          return throwError(() => error);
        })
      );
  }

  crearMembresia(membresia: Membresia): Observable<Membresia> {
    return this.http.post<Membresia>(this.apiUrl, membresia)
      .pipe(
        catchError(error => {
          console.error('Error al crear membresía:', error);
          return throwError(() => error);
        })
      );
  }

  actualizarMembresia(membresia: Membresia): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${membresia.id}`, membresia)
      .pipe(
        catchError(error => {
          console.error('Error al actualizar membresía:', error);
          return throwError(() => error);
        })
      );
  }

  eliminarMembresia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error al eliminar membresía:', error);
          return throwError(() => error);
        })
      );
  }
}
