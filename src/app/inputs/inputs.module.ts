import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputsPageRoutingModule } from './inputs-routing.module';

import { InputsPage } from './inputs.page';
import { TextinputComponent } from '../textinput/textinput.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputsPageRoutingModule
  ],
  declarations: [InputsPage, TextinputComponent]
})
export class InputsPageModule {}
