import { Component, OnInit } from '@angular/core';
import { MembresiaService } from '../../services/membresia.service';
import { Membresia } from '../../models/membresia';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PagoService } from '../../services/pago.service';
import { Pago } from '../../models/pago';

@Component({
  selector: 'app-membresias',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './membresias.component.html',
  styleUrl: './membresias.component.scss'
})
export class MembresiasComponent implements OnInit {
  errorMensaje: string = '';


  constructor(
    private router: Router,
    private membresiaService: MembresiaService,
    private pagoService: PagoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(nombre: string,descripcion: string,precio: number) {

    console.log(nombre,descripcion,precio);
    const fecha = new Date()

    const nuevaMembresia = {
      usuarioId: localStorage.getItem('idUsuario'),
      nombre,
      descripcion,
      precio,
      fechaInicio: `${fecha.getFullYear()}-${('0'+(fecha.getMonth()+1)).slice(-2)}-${fecha.getDate()}`,
      fechaFin: `${fecha.getFullYear()}-${('0'+(fecha.getMonth()+2)).slice(-2)}-${fecha.getDate()}`,
    }


      this.membresiaService.crearMembresia(nuevaMembresia).subscribe({
        next: (response: any) => {    
          console.log('Registro Asesor Exitoso:', response);
          const nuevoPago: Pago = {
            usuarioId: nuevaMembresia.usuarioId,
            membresiaId: response.membresiaId,
            monto: nuevaMembresia.precio,
            fechaPago: nuevaMembresia.fechaInicio,
            metodoPago: 'Tarjeta'
          };
          console.log(nuevoPago);
          this.pagoService.registrarPago(nuevoPago).subscribe({
            next: (response: any) => {
              console.log(response);
            },

            error: (error) =>{
              console.log(error);
            }
          })
          this.router.navigate(['/login']); 
        },
        error: (error) => {
          console.error('Error al crear membresia:', error);
          this.errorMensaje = 'Ocurrió un error al registrarse. Por favor, inténtalo de nuevo.';
        }
      });
    }


}
