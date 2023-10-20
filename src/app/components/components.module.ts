import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablapaisesComponent } from './tablapaises/tablapaises.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TablaRepartidorComponent } from './tabla-repartidor/tabla-repartidor.component';
import { CardPaisRepartidorComponent } from './card-pais-repartidor/card-pais-repartidor.component';
import { CardRepartidorComponent } from './card-repartidor/card-repartidor.component';

@NgModule({
  declarations: [
    TablapaisesComponent,
    LayoutComponent,
    TablaRepartidorComponent,
    CardPaisRepartidorComponent,
    CardRepartidorComponent,
  ],
  exports: [
    TablapaisesComponent,
    LayoutComponent,
    CardPaisRepartidorComponent,
    CardRepartidorComponent,
    TablaRepartidorComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
