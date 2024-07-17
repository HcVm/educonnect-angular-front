import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;
  errorMensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      tipo: ['estudiante', Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const nuevoUsuario = this.registroForm.value;
      this.usuarioService.crearUsuario(nuevoUsuario).subscribe({
        next: (response: any) => {
          console.log('Registro exitoso:', response);
          localStorage.setItem('idUsuario', response.usuarioId)
          this.router.navigate(['/membresias']);
        },
        error: (error) => {
          console.error('Error al registrar:', error);
          this.errorMensaje = 'Ocurrió un error al registrarse. Por favor, inténtalo de nuevo.';
        }
      });
    }
  }


  redirectTo(tipoUsuario: string) {
    if (tipoUsuario === 'estudiante') {
      this.router.navigate(['/registro']); 
    } else if (tipoUsuario === 'asesor') {
      this.router.navigate(['/registro-asesor']); 
    }
  }
}
