import { Component, Input, Output, EventEmitter } from '@angular/core';
import IRepartidor from 'src/app/interfaces/repartidor';
@Component({
  selector: 'app-table-repartidor',
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.scss']
})
export class TablaRepartidorComponent {
  @Input() repartidor!: IRepartidor[];
  @Output() verPaisClick = new EventEmitter<IRepartidor>();
  @Output() verMasClick = new EventEmitter<IRepartidor>();
  
  verPais(actor: IRepartidor) {
    this.verPaisClick.emit(actor);
  }

  verMas(actor: IRepartidor) {
    this.verMasClick.emit(actor);
  }
}




