import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago';
import { environment } from '../enviroments/eviroment';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  private apiUrl = `${environment.apiUrl}/pagos`;

  constructor(private http: HttpClient) { }

  registrarPago(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(this.apiUrl, pago);
  }

  obtenerPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(this.apiUrl);
  }

  obtenerPagosPorUsuario(usuarioId: number): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }
}
