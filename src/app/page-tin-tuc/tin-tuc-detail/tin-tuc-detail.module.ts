import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TinTucDetailPage } from './tin-tuc-detail.page';

//My modules

//Angular Material
import { MatCardModule, MatListModule, MatDividerModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: TinTucDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatCardModule, 
    MatListModule, 
    MatDividerModule,
  ],
  declarations: [TinTucDetailPage]
})
export class TinTucDetailPageModule {}
