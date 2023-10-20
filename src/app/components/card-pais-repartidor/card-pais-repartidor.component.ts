import { Component, Input } from '@angular/core';
import { repartidorPais } from 'src/app/pages/repartidor/detalles/detalles.component';

@Component({
  selector: 'app-card-pais-repartidor',
  templateUrl: './card-pais-repartidor.component.html',
  styleUrls: ['./card-pais-repartidor.component.scss']
})
export class CardPaisRepartidorComponent {
  @Input() repartidorPais!: repartidorPais;
}
