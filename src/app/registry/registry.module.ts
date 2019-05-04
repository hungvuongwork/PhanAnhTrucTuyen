import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistryPage } from './registry.page';

//Angular Material Component
import { MatInputModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: RegistryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule
  ],
  declarations: [RegistryPage]
})
export class RegistryPageModule {}
