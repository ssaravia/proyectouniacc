import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TefDebCredPageRoutingModule } from './tef-deb-cred-routing.module';

import { TefDebCredPage } from './tef-deb-cred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TefDebCredPageRoutingModule
  ],
  declarations: [TefDebCredPage]
})
export class TefDebCredPageModule {}
