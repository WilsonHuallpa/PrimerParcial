import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import IRepartidor from '../interfaces/repartidor';
import { Observable } from 'rxjs';
import { collectionData } from 'rxfire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  addActor(actor: IRepartidor){
    const aCollection = collection(this.firestore, 'actores');
    return addDoc(aCollection, actor);
  }
  getRepartidor(): Observable<IRepartidor[]>{
    const actorRef = collection(this.firestore, 'actores');
    return collectionData(actorRef, {idField:'id'}) as Observable<IRepartidor[]>;
  }
}
