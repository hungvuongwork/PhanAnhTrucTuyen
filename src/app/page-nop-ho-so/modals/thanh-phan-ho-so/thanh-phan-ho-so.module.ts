import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThanhPhanHoSoPage } from './thanh-phan-ho-so.page';

const routes: Routes = [
  {
    path: '',
    component: ThanhPhanHoSoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThanhPhanHoSoPage]
})
export class ThanhPhanHoSoPageModule {}
