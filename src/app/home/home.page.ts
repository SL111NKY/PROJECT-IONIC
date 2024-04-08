import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { DBService } from '../db.service';
import { doc, setDoc } from "firebase/firestore"; 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private dbservice: DBService) {}

  ngOnInit() {
    this.wbUsername = localStorage.getItem('username');
    this.filteredItems = this.items;
    this.outputitems = this.items;
  }




 async addItem() {
  console.log("wird ausgeführt");
    // Add a new document in collection "cities"
       await setDoc(doc(this.dbservice.db,"test","1"), {
        name: "Name",
        category: "",
        price: 30
      });
  }





  public wbUsername:string | null = 'Unknown';
  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  setOpen1(isOpen: boolean) {
    this.isModalOpen1= isOpen;
  }
  setOpen2(isOpen: boolean) {
    this.isModalOpen2= isOpen;
  }
  setOpen3(isOpen: boolean) {
    this.isModalOpen3= isOpen;
  }
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

  getLimitedItems(start: number, end: number): any[] {
    return this.items.slice(start, end);
  }
  public selectedcat:Array<any> = [];
  public selecteditem:Array<any> = [];
  public filteredItems:Array<any> = [];
  public outputitems:Array<any> = [];
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


}
