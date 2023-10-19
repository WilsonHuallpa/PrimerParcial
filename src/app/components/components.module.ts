import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablapaisesComponent } from './tablapaises/tablapaises.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TablapaisesComponent],
  exports: [
    TablapaisesComponent
  ],
  imports: [CommonModule,RouterModule],
})
export class ComponentsModule {}
