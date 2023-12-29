import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.authenticationService
      .login(this.loginForm.value)
      .subscribe((res: any) => {
        if (res.error) {
          console.log(res.error);
        } else {
          this.authenticationService.setToken(res.token);
          setTimeout(() => {
            this.router.navigate(['admin/dashboard']);
          }, 500);
        }
      });
  }
}
