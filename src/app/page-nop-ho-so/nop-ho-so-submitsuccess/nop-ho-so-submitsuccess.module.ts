import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NopHoSoSubmitsuccessPage } from './nop-ho-so-submitsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: NopHoSoSubmitsuccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NopHoSoSubmitsuccessPage]
})
export class NopHoSoSubmitsuccessPageModule {}
