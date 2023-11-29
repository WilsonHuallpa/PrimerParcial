import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { BanderasService } from 'src/app/services/banderas.service';

@Component({
  selector: 'app-tablapaises',
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.scss']
})
export class TablapaisesComponent implements OnInit{
  botonSeleccionado: string | null = null;
  misBanderas: any[] | undefined;
  selecContinente: string = ''; 
  bandera: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  selectedCountry: any = null;
  @Input() pais: any;
  @Output() seleccionar = new EventEmitter<string>()
  
  constructor(private servBandea: BanderasService) {}

  ngOnInit(): void {
  }

  getDisplayedCountries(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.misBanderas?.slice(startIndex, endIndex) || [];
  }
  selectCountry(country: string) {
    this.seleccionar.emit(country)
    this.selectedCountry = country;
  }

  isSelected(country: string) {
    return this.selectedCountry === country;

  }
  filterCountriesByRegion(region: string): void {
    this.servBandea.getRegion(region).subscribe((banderas) => {
      this.misBanderas = banderas.slice(0, 3);
    });
  }
}
