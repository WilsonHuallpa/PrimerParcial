import { Component } from '@angular/core';
import { Item } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Item[] = [
    {
      title: 'inicio',
      link: '/',
      active: true,
    },
    {
      title: 'login',
      link: '/login',
      active: false
    },
    {
      title: 'repartidor',
      link: '/repartidor',
      active: false,
      children: [
        {
          title: 'Alta Repartidor',
          link: '/repartidor/alta',
          active: true,
        },
        {
          title: 'Detalle De Repartidor',
          link: '/repartidor/detalle',
          active: true,
        },
      ]
    },
    {
      title: 'Salen Helados',
      link: '/salenHelados',
      active: false
    },
  ]
}
