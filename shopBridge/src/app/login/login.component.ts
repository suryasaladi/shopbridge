import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup,Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  message = "";
  constructor(private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.value.username === "surya.s" && this.loginForm.value.password === "password") {
      this.router.navigate(['inventory']);

    }
    else {
      this.message = "please enter valid credentials"
    }
  }
}