import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/user.interface';
import { map, shareReplay } from 'rxjs';
import { Router } from '@angular/router';
import { users } from 'src/app/db/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:3001/';
  private _user!: IUser;
  token$ = localStorage.getItem('token') ? true : false;

  dummyUsers: IUser[] = users;
  dummyToken: string = '1234567890';

  constructor(private http: HttpClient, private router: Router) {}

  //user login
  // login(email: string, password: string) {
  //   const body = { email, password };
  //   return this.http.post(`${this.loginUrl}login`, body).pipe(
  //     map((res: any) => {
  //       if (res && res.token) {
  //         this._user = res.user;
  //         localStorage.setItem('token', res.token);
  //       }
  //       if (res.error) {
  //         console.log(res.error);
  //       }
  //     }),
  //     shareReplay(1)
  //   );
  // }

  login(email: string, password: string) {
    const user = this.dummyUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      this._user = user;
      localStorage.setItem('token', this.dummyToken);
      this.router.navigate(['dashboard']);
    } else {
      console.log('User not found');
    }
  }

  //user logout
  logout() {
    this._user = undefined!;
    localStorage.removeItem('token');
  }

  isloggedIn() {
    return localStorage.getItem('token') ? true : false;
  }
}
