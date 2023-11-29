import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import IHelado from 'src/app/interfaces/helado';

@Component({
  selector: 'app-crear-helado',
  templateUrl: './crear-helado.component.html',
  styleUrls: ['./crear-helado.component.scss']
})
export class CrearHeladoComponent {
  helado: FormGroup;
  @Input() loading!: boolean;
  @Output() agregarHelado = new EventEmitter<IHelado>();

  constructor(private fb: FormBuilder) {
    this.helado = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required]],
      precio: ['', [Validators.required,this.validarNumero]],
      peso: ['', [Validators.required, Validators.min(250), Validators.max(1000),this.validarNumero]],
    });
  }

  validarNumero(control: AbstractControl): object | null  {
    const num = control.value;
    if (!num) {
      return null;
    }
    const soloNumeros = /^\d+$/;
    if (!soloNumeros.test(num)) {
      return { soloNumeros: true };
    }
    return null;
  }
  addHelado(){
    this.agregarHelado.emit(this.helado.value);
    this.helado.reset()
  }
}
