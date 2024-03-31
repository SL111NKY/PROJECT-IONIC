import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [InfoBoxComponent, NavbarComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [InfoBoxComponent, NavbarComponent],
})
export class SharedmoduleModule { }
