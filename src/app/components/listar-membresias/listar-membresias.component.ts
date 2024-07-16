import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MembresiaService } from '../../services/membresia.service';
import { Membresia } from '../../models/membresia';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-listar-membresias',
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule, MatIconModule],
  templateUrl: './listar-membresias.component.html',
  styleUrls: ['./listar-membresias.component.scss'] 
})
export class ListarAsesorComponent implements OnInit {
  membresias: Membresia[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio', 'duracion_dias'];
  usuarioAutenticado: Usuario | null = null;

  constructor(
    private membresiaService: MembresiaService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.usuarioAutenticado$.subscribe(usuario => {
      this.usuarioAutenticado = usuario;
    });

    this.cargarMembresias();
  }

  cargarMembresias() {
    this.membresiaService.obtenerMembresias().subscribe({
      next: (data) => {
        this.membresias = data;
      },
      error: (error) => {
        console.error('Error al cargar Membresias :', error);
      }
    });
  }

  estaAutenticado(): boolean {
    return this.authService.estaAutenticado();
  }
}
