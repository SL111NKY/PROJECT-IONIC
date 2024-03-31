import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  public pw:string | null = "";
  public id:string | null = "";

  public auth() {
  // console.log("Login pressed");
   if(this.id && this.pw){
    //console.log("Input vorhanden");
    localStorage.setItem('username',this.id);
    this.router.navigate(['/home']);
   }
   else {
   // console.log("KEINE DATEN GEFUELLT");
   }
  }

  constructor(public router: Router) { 

  }

  ngOnInit() {

  }

}
