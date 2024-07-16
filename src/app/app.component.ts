import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component'; // Importa el componente layout

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent], // Incluye el componente layout
  template: `<app-layout></app-layout>`,
  styles: []
})
export class AppComponent { }
