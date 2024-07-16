import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [] // Puedes agregar estilos aquí si lo deseas
})
export class LayoutComponent { }
