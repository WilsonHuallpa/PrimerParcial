import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { AltaComponent } from './alta/alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    AltaComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class RepartidorModule { }
