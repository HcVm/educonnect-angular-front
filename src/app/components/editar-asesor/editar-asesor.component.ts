import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AsesorService } from '../../services/asesor.service';
import { UsuarioService } from '../../services/usuario.service';
import { Asesor } from '../../models/asesor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-editar-asesor',
  standalone: true,
  templateUrl: './editar-asesor.component.html',
  imports: [
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatDatepickerModule, MatNativeDateModule, FormsModule, CommonModule, SweetAlert2Module
  ],
  styleUrls: ['./editar-asesor.component.scss']
})
export class EditarAsesorComponent implements OnInit {
  asesor: Asesor | undefined;
  usuarioId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private asesorService: AsesorService,
    private usuarioService: UsuarioService,
    public authService: AuthService,
  ) {
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.asesorService.obtenerAsesorPorId(this.usuarioId).subscribe(
      (usuario) => {
        this.asesor = usuario;
      },
      (error) => {
        console.error('Error al obtener el asesor:', error);
      }
    );
  }

  actualizarAsesor() {
    if (this.asesor) {
      this.asesorService.actualizarAsesor(this.asesor).subscribe(
        () => {
          Swal.fire({
            title: '¡Éxito!',
            text: 'Se ha completado la edición exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        },
        (error) => {
          console.error('Error al actualizar el asesor:', error);
        }
      );
    }
  }
}
