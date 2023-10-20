import { Component, Input } from '@angular/core';
import IRepartidor from 'src/app/interfaces/repartidor';

@Component({
  selector: 'app-card-repartidor',
  templateUrl: './card-repartidor.component.html',
  styleUrls: ['./card-repartidor.component.scss']
})
export class CardRepartidorComponent {
  @Input() actorDetalles!: IRepartidor;
}
