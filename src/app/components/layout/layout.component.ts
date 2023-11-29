import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
export type Item = {
  title: string;
  link: string;
  active: boolean;
  children?: Item[];
};
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() items: Item[] = [];

  constructor(public authUser: AuthService, private router: Router) {}
  cerrarSesion() {
    console.log('entro')
    this.authUser.logout();
    this.router.navigate(['/inicio']);
  }

}
