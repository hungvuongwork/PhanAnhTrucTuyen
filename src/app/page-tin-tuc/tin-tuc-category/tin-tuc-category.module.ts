import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TinTucCategoryPage } from './tin-tuc-category.page';

//My Modules
import { NavbarModule } from '../../navbar/navbar.module';

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
    NavbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [TinTucCategoryPage]
})
export class TinTucCategoryPageModule {}
