import { Component, Input, Output, EventEmitter } from '@angular/core';
import IRepartidor from 'src/app/interfaces/repartidor';
@Component({
  selector: 'app-table-repartidor',
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.scss']
})
export class TablaRepartidorComponent {
  @Input() repartidor!: IRepartidor[];
  @Output() repartidorSeleccionadoClick = new EventEmitter<IRepartidor>();

  repartidorSeleccionado(repartidor: IRepartidor) {
    this.repartidorSeleccionadoClick.emit(repartidor);
  }
}




