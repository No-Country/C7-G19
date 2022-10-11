import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/user.interface';
import { map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:3001/';
  private _user!: IUser;

  dummyUsers: IUser[] = [
    {
      id: 1,
      name: 'Alpha',
      password: '123',
      email: 'correo1@correo.com',
    },
    {
      id: 2,
      name: 'Bravo',
      password: '123',
      email: 'correo2@correo.com',
    },
    {
      id: 3,
      name: 'Charlie',
      password: '123',
      email: 'correo3@correo.com',
    },
  ];
  dummyToken: string = '1234567890';

  constructor(private http: HttpClient) {}

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
    }
  }

  //user logout
  logout() {
    this._user = undefined!;
    localStorage.removeItem('token');
  }
}
