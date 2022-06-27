import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosTefPageRoutingModule } from './datos-tef-routing.module';

import { DatosTefPage } from './datos-tef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosTefPageRoutingModule
  ],
  declarations: [DatosTefPage]
})
export class DatosTefPageModule {}
