import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsesorService } from '../../services/asesor.service';
import { UsuarioService } from '../../services/usuario.service';
import { Asesor } from '../../models/asesor';
import { Usuario } from '../../models/usuario';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-listar-asesores',
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule, MatIconModule, SweetAlert2Module],
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.scss'] 
})
export class ListarAsesorComponent implements OnInit {
  asesores: Asesor[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'especializacion', 'disponibilidad', 'acciones'];
  usuarioAutenticado: Usuario | null = null;

  constructor(
    private asesorService: AsesorService,
    private usuarioService: UsuarioService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.usuarioAutenticado$.subscribe(usuario => {
      this.usuarioAutenticado = usuario;
    });

    this.cargarAsesores();
  }

  cargarAsesores() {
    this.asesorService.obtenerAsesores().subscribe({
      next: (data) => {
        this.asesores = data;
      },
      error: (error) => {
        console.error('Error al cargar Asesor :', error);
      }
    });
  }

  editarAsesor(id: number) {
    this.router.navigate(['/editar-asesor', id]);
  }

  eliminarAsesor(id: number, idUsuario: number) {
    this.asesorService.eliminarAsesor(id).subscribe(
      () => {
        this.asesores = this.asesores.filter(asesor => asesor.id !== id);
        Swal.fire({
          title: '¡Éxito!',
          text: 'Se ha eliminado el asesor exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

      },
      (error) => {
        console.error('Error al eliminar Asesor:', error);
      }
    );

    this.usuarioService.eliminarUsuario(idUsuario).subscribe(
      () => {
        this.usuarioService.eliminarUsuario(idUsuario)
      }
    )
  }

  estaAutenticado(): boolean {
    return this.authService.estaAutenticado();
  }
}
