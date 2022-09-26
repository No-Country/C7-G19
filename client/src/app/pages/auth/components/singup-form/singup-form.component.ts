import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

//TODO: move logic to service.
@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.scss'],
})
export class SingupFormComponent implements OnInit {
  public signupForm = this.formBuilder.group({
    name: [''],
    email: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  //TODO: change suscribe to observable.
  register() {
    this.http
      .post<any>('http://localhost:3000/signupUsersList', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('SIGNIN SUCCESFUL');
          this.signupForm.reset();
          this.router.navigate(['/auth/login']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
