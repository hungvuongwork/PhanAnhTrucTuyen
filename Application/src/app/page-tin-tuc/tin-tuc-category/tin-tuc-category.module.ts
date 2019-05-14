import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TinTucCategoryPage } from './tin-tuc-category.page';

//My Modules

//Angular Material
import { MatCardModule, MatListModule, MatDividerModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: TinTucCategoryPage
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
    MatDividerModule
  ],
  declarations: [TinTucCategoryPage]
})
export class TinTucCategoryPageModule {}
