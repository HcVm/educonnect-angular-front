import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  templateUrl: './editar-usuario.component.html',
  imports: [
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatDatepickerModule, MatNativeDateModule, FormsModule, CommonModule, SweetAlert2Module
  ],
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  usuario: Usuario | undefined;
  usuarioId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    public authService: AuthService,
  ) {
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.usuarioService.obtenerUsuarioPorId(this.usuarioId).subscribe(
      (usuario) => {
        this.usuario = usuario;
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }

  actualizarUsuario() {
    if (this.usuario) {
      this.usuarioService.actualizarUsuario(this.usuario).subscribe(
        () => {
          Swal.fire({
            title: '¡Éxito!',
            text: 'Se ha completado la edición exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        },
        (error) => {
          console.error('Error al actualizar el usuario:', error);
        }
      );
    }
  }
}
