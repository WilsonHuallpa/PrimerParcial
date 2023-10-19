import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import IRepartidor from '../interfaces/repartidor';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  addActor(actor: IRepartidor){
    const aCollection = collection(this.firestore, 'actores');
    return addDoc(aCollection, actor);
  }
}
