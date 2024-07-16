import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PagoService } from '../../services/pago.service';
import { Pago } from '../../models/pago';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-listar-pagos',
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule, MatIconModule],
  templateUrl: './listar-pagos.component.html',
  styleUrls: ['./listar-pagos.component.scss'] 
})
export class ListarPagosComponent implements OnInit {
  pagos: Pago[] = [];
  displayedColumns: string[] = ['id','usuario_id', 'membresia_id', 'monto', 'fecha_pago','metodo_pago'];
  usuarioAutenticado: Usuario | null = null;

  constructor(
    private pagoService: PagoService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.usuarioAutenticado$.subscribe(usuario => {
      this.usuarioAutenticado = usuario;
    });

    this.cargarPagos();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  cargarPagos() {
    this.pagoService.obtenerPagos().subscribe({
      next: (data) => {
        this.pagos = data;
      },
      error: (error) => {
        console.error('Error al cargar pagos :', error);
      }
    });
  }

  estaAutenticado(): boolean {
    return this.authService.estaAutenticado();
  }
}
