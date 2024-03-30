import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [InfoBoxComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [InfoBoxComponent],
})
export class SharedmoduleModule { }
