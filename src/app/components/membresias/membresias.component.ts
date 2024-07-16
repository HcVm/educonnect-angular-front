import { Component, OnInit } from '@angular/core';
import { MembresiaService } from '../../services/membresia.service';
import { Membresia } from '../../models/membresia';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membresias',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './membresias.component.html',
  styleUrl: './membresias.component.scss'
})
export class MembresiasComponent implements OnInit {
  membresias: Membresia[] = [];

  constructor(private membresiaService: MembresiaService) { }

  ngOnInit(): void {
    this.membresiaService.obtenerMembresias().subscribe({
      next: (membresias) => this.membresias = membresias,
      error: (error) => console.error('Error al obtener membresías:', error)
    });
  }
}
