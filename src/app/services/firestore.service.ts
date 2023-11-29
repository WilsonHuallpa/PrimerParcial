import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  updateDoc,
  doc,
  collectionData,
  deleteDoc,
} from '@angular/fire/firestore';
import IRepartidor from '../interfaces/repartidor';
import { Observable } from 'rxjs';
import IHelado from '../interfaces/helado';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  addActor(actor: IRepartidor) {
    const aCollection = collection(this.firestore, 'repatidor');
    return addDoc(aCollection, actor);
  }
  getRepartidor(): Observable<IRepartidor[]> {
    const actorRef = collection(this.firestore, 'repatidor');
    return collectionData(actorRef, { idField: 'id' }) as Observable<
      IRepartidor[]
    >;
  }
  addHelado(helado: IHelado) {
    const aCollection = collection(this.firestore, 'helados');
    return addDoc(aCollection, helado);
  }
  getHelados(): Observable<IHelado[]> {
    const actorRef = collection(this.firestore, 'helados');
    return collectionData(actorRef, { idField: 'id' }) as Observable<IHelado[]>;
  }
  updateHelado(id: string, data: any) {
    const col = collection(this.firestore, 'helados')
    const heladoRef = doc(col, id);
    return updateDoc(heladoRef, data);
  }
  delete(id:string){
    const col = collection(this.firestore, 'helados');
    const documento = doc(col,id);
    deleteDoc(documento);
  }
}
