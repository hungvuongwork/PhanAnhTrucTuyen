import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NopHoSoSubmitdocPage } from './nop-ho-so-submitdoc.page';

//Angular Material
import { MatStepperModule, MatButtonModule, MatInputModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: NopHoSoSubmitdocPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
    //Angular Material
    MatStepperModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [NopHoSoSubmitdocPage]
})
export class NopHoSoSubmitdocPageModule {}
