import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  public inputvalue:string | null = "Test";

public save() {
  console.log(this.inputvalue);
  if (this.inputvalue !=null){
      localStorage.setItem("Inputvalue",this.inputvalue);
  }
 

}
  constructor() { }

  ngOnInit() {
    this.inputvalue = localStorage.getItem('Inputvalue');
  }

}
