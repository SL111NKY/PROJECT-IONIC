import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductcardComponent } from './productcard/productcard.component';



@NgModule({
  declarations: [InfoBoxComponent, NavbarComponent, ProductcardComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [InfoBoxComponent, NavbarComponent, ProductcardComponent],
})
export class SharedmoduleModule { }
