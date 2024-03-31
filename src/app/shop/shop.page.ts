import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  public cats:Array<String> = ["Alchemie","Waffen","Rüstungen","Ketten","Schuhe","Armbänder","Helme"];
  public toggleOn:boolean = true;
  public items:Array<any> =  [
    { name: 'Giftschwert', category: 'Waffen', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price: 10 },
    { name: 'Schwarzstahlpanzer', category: 'Rüstungen', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price: 20 },
    { name: 'Himmelstraenenhalskette', category: 'Ketten', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price: 30 },
    { name: 'Rubin', category: 'Alchemie', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:4999},
    { name: 'Ozeanschuhe', category: 'Schuhe', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Schlachtschild', category: 'Schild', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Rubinohrringe', category: 'Ohrringe', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Schlangenglocke', category: 'Waffen', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Schwarze Kleidung', category: 'Rüstungen', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Seelengürtel', category: 'Gürtel', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
  ];
  public selectcat:string | null = "";
  constructor() { }

  ngOnInit() {
  }

}
