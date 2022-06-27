import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdduserOkPageRoutingModule } from './adduser-ok-routing.module';

import { AdduserOkPage } from './adduser-ok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdduserOkPageRoutingModule
  ],
  declarations: [AdduserOkPage]
})
export class AdduserOkPageModule {}
