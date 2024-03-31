import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public wbUsername:string | null = 'Unknown';

  constructor() {}

  ngOnInit() {
    this.wbUsername = localStorage.getItem('username');
  }

}
