import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontoPage } from './monto.page';

const routes: Routes = [
  {
    path: '',
    component: MontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontoPageRoutingModule {}
