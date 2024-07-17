import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule, MatIcon, SweetAlert2Module],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.scss'
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'tipo' , 'acciones'];
  usuarioAutenticado: Usuario | null = null;

  constructor(
    private usuarioService: UsuarioService,
    public authService: AuthService,
    private router: Router
  ) { }

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
      }
    });
  }

  editarUsuario(id: number) {
    this.router.navigate(['/editar-usuario', id]);
  }

  eliminarUsuario(id: number) {
    this.usuarioService.eliminarUsuario(id).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        Swal.fire({
          title: '¡Éxito!',
          text: 'Se ha eliminado el usuario exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      },
      (error) => {
        console.error('Error al eliminar usuario:', error);
      }
      
    );
  }

  estaAutenticado(): boolean {
    return this.authService.estaAutenticado();
  }
}