import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablapaisesComponent } from './tablapaises/tablapaises.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [TablapaisesComponent, LayoutComponent],
  exports: [
    TablapaisesComponent,
    LayoutComponent
  ],
  imports: [CommonModule,RouterModule],
})
export class ComponentsModule {}
