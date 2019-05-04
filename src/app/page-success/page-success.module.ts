import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageSuccessPage } from './page-success.page';

//Angular Material 7
import { MatDividerModule } from '@angular/material';

//My components
import { NopHoSoSubmitsuccessComponent } from './components/nop-ho-so-submitsuccess/nop-ho-so-submitsuccess.component';
import { RegistrySuccessComponent } from './components/registry-success/registry-success.component';

const routes: Routes = [
  {
    path: '',
    component: PageSuccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatDividerModule
  ],
  declarations: [PageSuccessPage, NopHoSoSubmitsuccessComponent, RegistrySuccessComponent]
})
export class PageSuccessPageModule {}
