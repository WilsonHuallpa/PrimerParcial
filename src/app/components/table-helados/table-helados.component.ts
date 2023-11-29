import { Component, EventEmitter, Input, Output } from '@angular/core';
import IHelado from 'src/app/interfaces/helado';

@Component({
  selector: 'app-table-helados',
  templateUrl: './table-helados.component.html',
  styleUrls: ['./table-helados.component.scss']
})
export class TableHeladosComponent {
  @Input() helados!: IHelado[];
  @Input() heladoSelecionado!: IHelado | null;
  @Output() heladoSeleccionado = new EventEmitter<IHelado>();

  repartidorSeleccionado(helado: IHelado) {
    this.heladoSeleccionado.emit(helado);
  }
  isHeladoSeleccionado(helado: IHelado): boolean {

    return this.heladoSelecionado !== null && this.heladoSelecionado.id === helado.id;
  }
}
