import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; // Importa MatTableModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, RouterLink], // Agrega MatTableModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'tipo'];
  usuarioAutenticado: Usuario | null = null;

  constructor(
    private usuarioService: UsuarioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.usuarioAutenticado$.subscribe(usuario => {
      this.usuarioAutenticado = usuario;
    });

    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
        // Manejar el error de forma adecuada (mostrar un mensaje al usuario, etc.)
      }
    });
  }

  estaAutenticado(): boolean {
    return this.authService.estaAutenticado();
  }
}
