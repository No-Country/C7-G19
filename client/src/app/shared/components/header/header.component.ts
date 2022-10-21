import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  token!: boolean;

  constructor(private auth: AuthService) {
    this.token = this.auth.isloggedIn();
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }

  ngDoCheck() {
    this.token = this.auth.isloggedIn();
  }
}
