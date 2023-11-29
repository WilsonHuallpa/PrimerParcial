import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss'],
})
export class AltaComponent {
  repartidor: FormGroup;
  valorPasarAlHijo = 'pais';
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private firestore: FirestoreService,
    private toastr: ToastrService
  ) {
    this.repartidor = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required, this.validarNumero]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      capacidad: ['', [Validators.required, this.validarNumero]],
      unidadPropia: [false],
      pais: ['', [Validators.required]],
    });
  }

  validarNumero(control: AbstractControl): object | null {
    const num = control.value;
    const soloNumeros = /^\d+$/;
    if (!soloNumeros.test(num)) {
      return { soloNumeros: true };
    }
    return null;
  }

  async addUser() {
    const data = this.repartidor.value;
    this.loading = true;
    try {
      await this.firestore.addActor(data);
      this.repartidor.reset();
      this.toastr.success(
        'se agrego un repartidor correctamente',
        'Felicidades!'
      );
      this.loading = false;
    } catch (error) {
      this.toastr.error('Al crear un Repartidor', 'Error!');
      this.loading = false;
    }
  }
  seleccionarPais(pais: string) {
    this.repartidor.patchValue({ pais: pais });
  }
}
