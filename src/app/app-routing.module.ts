import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'adduser',
    loadChildren: () => import('./adduser/adduser.module').then( m => m.AdduserPageModule)
  },
  {
    path: 'adduser-ok',
    loadChildren: () => import('./adduser-ok/adduser-ok.module').then( m => m.AdduserOkPageModule)
  },
  {
    path: 'acceder',
    loadChildren: () => import('./acceder/acceder.module').then( m => m.AccederPageModule)
  },
  {
    path: 'acceder-nok',
    loadChildren: () => import('./acceder-nok/acceder-nok.module').then( m => m.AccederNokPageModule)
  },
  {
    path: 'hola',
    loadChildren: () => import('./hola/hola.module').then( m => m.HolaPageModule)
  },
  {
    path: 'tipo',
    loadChildren: () => import('./tipo/tipo.module').then( m => m.TipoPageModule)
  },
  {
    path: 'monto',
    loadChildren: () => import('./monto/monto.module').then( m => m.MontoPageModule)
  },
  {
    path: 'tef-deb-cred',
    loadChildren: () => import('./tef-deb-cred/tef-deb-cred.module').then( m => m.TefDebCredPageModule)
  },
  {
    path: 'datos-tef',
    loadChildren: () => import('./datos-tef/datos-tef.module').then( m => m.DatosTefPageModule)
  },
  {
    path: 'ejemplo',
    loadChildren: () => import('./ejemplo/ejemplo.module').then( m => m.EjemploPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
