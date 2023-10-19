import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUsuario: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authUser: AuthService,
    private router: Router,
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
   console.log('entre')
    this.authUser
      .loginUser(email, password)
      .then((user) => {
        console.log(user)
        this.router.navigate(['inicio']);
      })
      .catch((error) => {
        console.log(error)
       
      });
  }

  quickAccess( email:string , password:string ) {
    this.loginUsuario.setValue({
      email: email,
      password: password
    });
  }
}

