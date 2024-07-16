import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { environment } from '../enviroments/eviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/usuarios`;
  private usuarioAutenticadoSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  iniciarSesion(usuario: Partial<Usuario>): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, usuario).pipe(
      tap(usuarioAutenticado => {
        if (usuarioAutenticado) {
          this.usuarioAutenticadoSubject.next(usuarioAutenticado);
          console.log('AuthService: usuarioAutenticadoSubject actualizado:', this.usuarioAutenticadoSubject.value);
        } else {
          return;
        }
      }),
      catchError(error => {
        console.error('AuthService: Error al iniciar sesión:', error);
        return throwError(() => error); 
      })
    );
  }

  cerrarSesion() {
    this.usuarioAutenticadoSubject.next(null);
    // Opcional: Limpiar datos del usuario en localStorage
  }

  estaAutenticado(): boolean {
    return this.usuarioAutenticadoSubject.value !== null;
  }
}
