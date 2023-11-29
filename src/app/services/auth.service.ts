import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // islogged = false;
  // usuario = 'user'
  constructor(private auth: Auth) { }
  loginUser(email: string, password: string): Promise<any> {
    // this.islogged = true;
    // if(email == 'wilson@gmail.com'){
    //   this.usuario = 'admin'
    // }else{
    //   this.usuario = 'user'
    // }
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    //this.islogged = false;
    return this.auth.signOut();
  }
}
