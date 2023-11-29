import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent {
  repartidor: FormGroup;
  valorPasarAlHijo = 'pais';

  constructor(private fb: FormBuilder,private firestore: FirestoreService ) {
    this.repartidor = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required, this.validarNumero]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99) ]],
      capacidad: ['', [Validators.required, this.validarNumero]],
      unidadPropia: [false,],
      pais: ['', [Validators.required]],
    });
  }

  validarNumero(control: AbstractControl): object | null  {
    const num = control.value;
    const soloNumeros = /^\d+$/;
    if (!soloNumeros.test(num)) {
      return { soloNumeros: true };
    }
    return null;
  }

  addUser() {
    const data = this.repartidor.value;
    //Agregar spiner y mensaje que se subio correctamente
    try {
      this.firestore.addActor(data);
      this.repartidor.reset();
    } catch (error) {
      console.log('Error:',error)
    }
  }
  seleccionarPais(pais: string) {
    this.repartidor.patchValue({ pais: pais });
  }
}
