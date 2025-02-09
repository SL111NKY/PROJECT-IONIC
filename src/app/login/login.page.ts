import { AuthService } from '../services/auth.service';
import { Component, inject, Inject, INJECTOR, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


interface CANNA {
  id: string;
  category: string;
  country: string;
  description:string;
  firma:string;
  genetik:string;
  kultivar:string;
  sorte:string;
  thc:number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  user: any = null;
  clientId = '545762027595-83hnm2u56k7qoq04mg051jfdbm9n1sps.apps.googleusercontent.com'; // Ersetze mit deiner Client-ID
  data: CANNA[] = [];

 
  constructor(private authService: AuthService, private dataService: DataService) {}

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });

    this.authService.initializeGoogleSignIn(this.clientId);




    this.dataService.fetchData().subscribe(
      (response: any) => {
        this.data = response;
        console.log('Fetched Data:', this.data);
        const firstPost = this.data[0];
        console.log('First Post Title:', firstPost.id);
        console.log('First Post Body:', firstPost.category);

      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );




  }

  logout() {
    this.authService.logout();
  }

}