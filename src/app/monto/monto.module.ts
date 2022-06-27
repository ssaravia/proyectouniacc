import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontoPageRoutingModule } from './monto-routing.module';

import { MontoPage } from './monto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontoPageRoutingModule
  ],
  declarations: [MontoPage]
})
export class MontoPageModule {}
