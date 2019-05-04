import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './menu/menu.module#MenuPageModule'
  },
  { path: 'nop-ho-so-submitsuccess', loadChildren: './page-nop-ho-so/nop-ho-so-submitsuccess/nop-ho-so-submitsuccess.module#NopHoSoSubmitsuccessPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
