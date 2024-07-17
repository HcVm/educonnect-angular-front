import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AsesorService } from '../../services/asesor.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-asesor-disponibilidad',
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
  templateUrl: './registro-asesor-disponibilidad.component.html',
  styleUrls: ['./registro-asesor-disponibilidad.component.scss']
})
export class RegistroAsesorDisponibilidadComponent implements OnInit {
  registroForm!: FormGroup;
  errorMensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private asesorService: AsesorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      usuarioId: [localStorage.getItem('id'), Validators.required],
      especializacion: ['', [Validators.required]],
      disponibilidad: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const nuevoAsesor = this.registroForm.value;
      this.asesorService.crearAsesor(nuevoAsesor).subscribe({
        next: (response) => {
          console.log('Registro Asesor Exitoso:', response);
          this.router.navigate(['/login']); 
        },
        error: (error) => {
          console.error('Error al registrar:', error);
          this.errorMensaje = 'Ocurrió un error al registrarse. Por favor, inténtalo de nuevo.';
        }
      });
    }
  }
}
