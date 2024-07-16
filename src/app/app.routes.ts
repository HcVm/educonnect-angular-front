import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard'; // Asegúrate de tener tu AuthGuard creado
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';


export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirige a login por defecto
  { path: '', component: PrincipalPageComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'editar-usuario', component: EditarUsuarioComponent },
  { path: 'listar-usuario', component: ListarUsuariosComponent },
  { path: 'membresias', component: MembresiasComponent },
  
  // Rutas protegidas (requieren autenticación)
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },


  // Ruta para página no encontrada (404)
  { path: '**', component: NotFoundComponent }
];
