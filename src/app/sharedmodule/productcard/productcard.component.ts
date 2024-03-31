import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss'],
})
export class ProductcardComponent  implements OnInit {

  public cats:Array<String> = ["Alchemie","Waffen","Rüstungen","Schmuck"];
  public toggleOn:boolean = true;
  public items:Array<any> =  [
    { name: 'Giftschwert', category: 'waffe', price: 10 },
    { name: 'Schwarzstahlpanzer', category: 'ruestung', price: 20 },
    { name: 'Himmelstraenenhalskette', category: 'schmuck', price: 30 },
    { name: 'Test', category: 'test', price:0},
    { name: 'Test2', category: 'test2', price:0}
  ];

  constructor() { }

  ngOnInit() {
  }

}
