import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroAsesorComponent } from './components/registro-asesor/registro-asesor.component';
import { RegistroAsesorDisponibilidadComponent } from './components/registro-asesor-disponibilidad/registro-asesor-disponibilidad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard'; // Asegúrate de tener tu AuthGuard creado
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { EditarAsesorComponent } from './components/editar-asesor/editar-asesor.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { ListarAsesorComponent } from './components/listar-asesor/listar-asesor.component'
import { ListarMembresiasComponent } from './components/listar-membresias/listar-membresias.component'
import { ListarPagosComponent } from './components/listar-pagos/listar-pagos.component'


export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirige a login por defecto
  { path: '', component: PrincipalPageComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro-asesor', component: RegistroAsesorComponent },
  { path: 'registro-asesor-disponibilidad', component: RegistroAsesorDisponibilidadComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'membresias', component: MembresiasComponent },
  
  // Rutas protegidas (requieren autenticación)
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'listar-usuarios', component: ListarUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'listar-asesores', component: ListarAsesorComponent, canActivate: [AuthGuard] },
  { path: 'listar-pagos', component: ListarPagosComponent, canActivate: [AuthGuard] },
  { path: 'listar-membresias', component: ListarMembresiasComponent, canActivate: [AuthGuard] },


  { path: 'editar-usuario', component: EditarUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'listar-usuario', component: ListarUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'editar-asesor/:id', component: EditarAsesorComponent, canActivate: [AuthGuard] },
  


  // Ruta para página no encontrada (404)
  { path: '**', component: NotFoundComponent }
];
