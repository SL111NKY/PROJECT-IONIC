import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports: [FooterComponent, NavbarComponent, RouterModule],
})
export class SharedmoduleModule { }
