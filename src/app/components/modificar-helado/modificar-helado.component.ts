import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import IHelado from 'src/app/interfaces/helado';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-modificar-helado',
  templateUrl: './modificar-helado.component.html',
  styleUrls: ['./modificar-helado.component.scss']
})
export class ModificarHeladoComponent {
  helado: FormGroup;
  @Input() loading01!: boolean;
  @Input() heladoSelecionado!: IHelado | null;
  @Output() modificarHelado = new EventEmitter<IHelado>();

  constructor(private fb: FormBuilder) {
    this.helado = this.fb.group({
      id: ['',],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required]],
      precio: ['', [Validators.required,this.validarNumero]],
      peso: ['', [Validators.required, Validators.min(250), Validators.max(1000),this.validarNumero]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['heladoSelecionado'] && this.heladoSelecionado) {
      this.helado.patchValue(this.heladoSelecionado);
    }
  }
  validarNumero(control: AbstractControl): object | null  {
    const num = control.value;
    const soloNumeros = /^\d+$/;
    if (!soloNumeros.test(num)) {
      return { soloNumeros: true };
    }
    return null;
  }
  modificar(){
    this.modificarHelado.emit(this.helado.value);
    this.helado.reset()
  }
}
