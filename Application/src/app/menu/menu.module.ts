import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

//Angular Material
import { MatIconModule } from '@angular/material';

//My Modals
//import { ThanhPhanHoSoPageModule } from '../page-nop-ho-so/modals/thanh-phan-ho-so/thanh-phan-ho-so.module';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginPageModule'
      },
      {
        path: 'registry',
        loadChildren: '../registry/registry.module#RegistryPageModule'
      },
      {
        path: 'tin-tuc-category',
        loadChildren: '../page-tin-tuc/tin-tuc-category/tin-tuc-category.module#TinTucCategoryPageModule'
      },
      {
        path: 'tin-tuc-detail',
        loadChildren: '../page-tin-tuc/tin-tuc-detail/tin-tuc-detail.module#TinTucDetailPageModule'
      },
      {
        path: 'nop-ho-so-submitdoc',
        loadChildren: '../page-nop-ho-so/nop-ho-so-submitdoc/nop-ho-so-submitdoc.module#NopHoSoSubmitdocPageModule',
      },
      {
        path: 'page-success',
        loadChildren: '../page-success/page-success.module#PageSuccessPageModule'
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
    MatIconModule,

    //My Modals
    //ThanhPhanHoSoPageModule

  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
