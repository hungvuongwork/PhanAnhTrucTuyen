import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

//Angular Material
import { MatIconModule } from '@angular/material';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home', loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'login', loadChildren: '../login/login.module#LoginPageModule'
      },
      {
        path: 'tin-tuc-category',
        loadChildren: '../page-tin-tuc/tin-tuc-category/tin-tuc-category.module#TinTucCategoryPageModule'
      },
      {
        path: 'tin-tuc-detail',
        loadChildren: '../page-tin-tuc/tin-tuc-detail/tin-tuc-detail.module#TinTucDetailPageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/home',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatIconModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
