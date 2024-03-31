import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    SharedmoduleModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
