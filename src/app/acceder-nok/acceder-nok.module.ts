import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccederNokPageRoutingModule } from './acceder-nok-routing.module';

import { AccederNokPage } from './acceder-nok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccederNokPageRoutingModule
  ],
  declarations: [AccederNokPage]
})
export class AccederNokPageModule {}
