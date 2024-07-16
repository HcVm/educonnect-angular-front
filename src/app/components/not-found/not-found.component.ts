import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <h1>404 - Página no encontrada</h1>
    <p>La página que buscas no existe.</p>
  `,
  styles: []
})
export class NotFoundComponent {}
