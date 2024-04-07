import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  public cats:Array<String> = ["Alchemie","Waffen","Rüstungen","Ketten","Schuhe","Armbänder","Helme"];
  public toggleOn:boolean = true;
  public items =  [
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
    { name: 'Runenschwert', category: 'Waffen', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price: 10 },
    { name: 'Kyanitrüstung', category: 'Rüstungen', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price: 20 },
    { name: 'Smaragdhalskette', category: 'Ketten', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price: 30 },
    { name: 'Saphir', category: 'Alchemie', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:4999},
    { name: 'Bambushautschuhe', category: 'Schuhe', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Titanschild', category: 'Schild', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Saphirohrringe', category: 'Ohrringe', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Schlangenschwert', category: 'Waffen', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Drachengottpanzer', category: 'Rüstungen', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
    { name: 'Titangürtel', category: 'Gürtel', desc:'Testbeschreibung', imgpath:'../assets/images/product.png', price:0},
  ];
  public selectedcat:Array<any> = [];
  public selecteditem:Array<any> = [];
  public filteredItems:Array<any> = [];
  public outputitems:Array<any> = [];




  constructor() {}

  filterItemsByCategory() {
      if(this.selectedcat == null || this.selectedcat.length == 0 || this.selectedcat == undefined) {
        this.filteredItems = this.items;
        this.outputitems = this.filteredItems;
      }
      else {
        this.filteredItems = this.items.filter(value =>{
         return this.selectedcat.includes(value.category);
        });

        this.outputitems = this.items.filter(value =>{
          return this.selectedcat.includes(value.category);
         })
      }
    // console.log(this.filteredItems);

  }

  filterItemsByName() {
    if(this.selecteditem == null || this.selecteditem.length == 0 || this.selecteditem == undefined) {
        this.outputitems = this.items.filter(value =>{
          return this.selectedcat.includes(value.category);
         })
      }
    else {
      this.outputitems = this.items.filter(value =>{
        return this.selecteditem.includes(value.name) && this.selectedcat.includes(value.category);
      })
    }
}


  ngOnInit() {
    this.filteredItems = this.items;
    this.outputitems = this.items;
  }

}