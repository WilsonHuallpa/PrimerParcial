import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FirestoreService } from './firestore.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private auth: Auth, private fire: FirestoreService) { 

  }
  loginUser(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  isAuthenticated() {
    return this.auth.currentUser;
  }
  rolUser(){
    const user = this.isAuthenticated()
    let rol = null;
    if(user?.email){
      rol = this.fire.getRol(user.email)
    }
    return rol;
  }
}
