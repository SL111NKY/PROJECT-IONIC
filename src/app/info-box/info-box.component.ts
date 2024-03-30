import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent  implements OnInit {

  public users = [
    {
      username: "user1",
      email: "user1@example.com",
      age: 25
    },
    {
      username: "user2",
      email: "user2@example.com",
      age: 30
    },
    {
      username: "user3",
      email: "user3@example.com",
      age: 28
    }
  ];

  constructor() { }

  ngOnInit() {}

}
