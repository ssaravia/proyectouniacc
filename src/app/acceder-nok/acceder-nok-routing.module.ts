import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccederNokPage } from './acceder-nok.page';

const routes: Routes = [
  {
    path: '',
    component: AccederNokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccederNokPageRoutingModule {}
