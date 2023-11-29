import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { SalenHeladosComponent } from './pages/salen-helados/salen-helados.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: BienvenidoComponent,
    canActivate:[authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'repartidor',
    loadChildren: () => import('./pages/repartidor/repartidor.module').then(m => m.RepartidorModule),
    canActivate:[authGuard]
  },
  {
    path: 'salenHelados',
    component: SalenHeladosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
