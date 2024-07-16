import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { PrincipalPageComponent } from '../components/principal-page/principal-page.component';
import { FooterComponent } from '../components/footer/footer.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, PrincipalPageComponent, FooterComponent],
  template: `
    <main>
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </main>
  `,
  styles: [] // Puedes agregar estilos aquí si lo deseas
})
export class LayoutComponent { }
