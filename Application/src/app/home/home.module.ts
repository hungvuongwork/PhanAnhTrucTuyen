import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

//Angular Material
import { MatTabsModule, MatToolbarModule, MatIconModule, MatCardModule, MatListModule, MatDividerModule, MatMenuModule } from '@angular/material';

//My Modules
import { NopHoSoUnregistryModule } from '../page-nop-ho-so/components/nop-ho-so-unregistry/nop-ho-so-unregistry.module';
import { NopHoSoRegistriedModule } from '../page-nop-ho-so/components/nop-ho-so-registried/nop-ho-so-registried.module';
import { TruncateModule } from '../common/truncate/truncate.module';

//My Components
import { TinTucComponent } from '../page-tin-tuc/components/tin-tuc/tin-tuc.component';
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
    
    //Angular Material 7
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,

    //My Modules
    NopHoSoUnregistryModule,
    NopHoSoRegistriedModule,
    TruncateModule
  ],

  declarations: [HomePage, NguoiDungComponent, TinTucComponent]
})
export class HomePageModule { }
