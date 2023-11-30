import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss']
})
export class TerminosComponent implements OnInit {
  userEmail: string = '';
  acceptedTerms: boolean = false;
  user: any;
  registrarUsuarios: FormGroup;

  constructor(private authService: AuthService, private router: Router,  private fb: FormBuilder) {
    this.registrarUsuarios = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      check: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }
  submitForm() {
    const resul = this.registrarUsuarios.value;
      this.authService.setUser(resul.mail, true);
      this.router.navigate(['/inicio']);
    
  }
}
