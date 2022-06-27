import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TefDebCredPage } from './tef-deb-cred.page';

const routes: Routes = [
  {
    path: '',
    component: TefDebCredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TefDebCredPageRoutingModule {}
