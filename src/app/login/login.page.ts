import { AuthService } from '../services/auth.service';
import { Component, inject, Inject, INJECTOR, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  user: any = null;
  clientId = '545762027595-83hnm2u56k7qoq04mg051jfdbm9n1sps.apps.googleusercontent.com'; // Ersetze mit deiner Client-ID

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });

    this.authService.initializeGoogleSignIn(this.clientId);
  }

  logout() {
    this.authService.logout();
  }

}