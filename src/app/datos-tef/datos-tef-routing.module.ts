import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosTefPage } from './datos-tef.page';

const routes: Routes = [
  {
    path: '',
    component: DatosTefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosTefPageRoutingModule {}
