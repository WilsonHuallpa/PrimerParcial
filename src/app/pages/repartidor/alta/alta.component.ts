import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent {
  repartidor: FormGroup;
  valorPasarAlHijo = 'pais';
  // private firestore: FirestoreService
  constructor(private fb: FormBuilder,private firestore: FirestoreService ) {
    this.repartidor = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.minLength(3)]],
      capacidad: ['', [Validators.required, Validators.email]],
      unidadPropia: ['', [Validators.required, Validators.minLength(3)]],
      pais: ['', [Validators.required]],
    });
  }


  addUser() {
    const user = this.repartidor.value;
    try {
      this.firestore.addActor(user);
    } catch (error) {
    }
  }
  seleccionarPais(pais: string) {
    this.repartidor.patchValue({ pais: pais });
  }
}
