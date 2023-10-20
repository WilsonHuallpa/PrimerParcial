import { Component, OnInit } from '@angular/core';
import IRepartidor from 'src/app/interfaces/repartidor'; 

import { BanderasService } from 'src/app/services/banderas.service';
import { FirestoreService } from 'src/app/services/firestore.service';
export type repartidorPais = {
  usuario: string;
  nombrePais: string;
  flag: string;
  region: string;
  languages: string;
};
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
  repartidor!: IRepartidor[];
  repartidorPais!: repartidorPais;
  repartidorDetalles!: IRepartidor;

  constructor(
    private firestore: FirestoreService,
    private bandera: BanderasService
  ) {}
  ngOnInit(): void {
    this.firestore.getRepartidor().subscribe((data) => {
      this.repartidor = data;
      console.log('listado de actores', this.repartidor);
    });
  }
 
  verPais(repartidor: IRepartidor) {
    this.bandera.pais(repartidor.pais).subscribe((data) => {
      const { name, region, flags, languages } = data[0];
      this.repartidorPais = {
        usuario: repartidor.nombre,
        nombrePais: name.common,
        flag: flags.png,
        region: region,
        languages: languages.spa,
      };
    });
  }
  verMas(repartidor: IRepartidor) {
    this.repartidorDetalles = repartidor;
  }
  
}
