import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

//Angular Material
import { MatTabsModule, MatToolbarModule, MatIconModule, MatButtonToggleModule} from '@angular/material';

//My Modules
import { NavbarModule } from '../navbar/navbar.module';
import { TinTucModule } from '../page-tin-tuc/tin-tuc/tin-tuc.module';

//My Components
import { NopHoSoComponent } from '../page-nop-ho-so/nop-ho-so/nop-ho-so.component';
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
    TinTucModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
  ],

  declarations: [HomePage, NopHoSoComponent, NguoiDungComponent]
})
export class HomePageModule { }
