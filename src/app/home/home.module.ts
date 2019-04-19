import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

//Angular Material
import { MatTabsModule, MatToolbarModule, MatIconModule, MatButtonToggleModule, MatCardModule, MatListModule, MatDividerModule, MatButtonModule } from '@angular/material';

//My Modules
import { NavbarModule } from '../navbar/navbar.module';
import { NopHoSoUnregistryModule } from '../page-nop-ho-so/components/nop-ho-so-unregistry/nop-ho-so-unregistry.module';

//My Components
import { TinTucComponent } from '../page-tin-tuc/components/tin-tuc/tin-tuc.component';
import { NopHoSoRegistriedComponent } from '../page-nop-ho-so/components/nop-ho-so-registried/nop-ho-so-registried.component';
import { NguoiDungComponent } from '../page-nguoi-dung/nguoi-dung/nguoi-dung.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ]),
    NavbarModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    NopHoSoUnregistryModule
  ],

  declarations: [HomePage, NopHoSoRegistriedComponent, NguoiDungComponent, TinTucComponent]
})
export class HomePageModule { }
