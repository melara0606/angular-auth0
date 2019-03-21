import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(public auth: AuthService) {
    this.auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }

  salir(): void {
    this.auth.logout();
  }

}
