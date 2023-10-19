import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', 
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: BienvenidoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'repartidor',
    loadChildren: () => import('./pages/repartidor/repartidor.module').then(m => m.RepartidorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
