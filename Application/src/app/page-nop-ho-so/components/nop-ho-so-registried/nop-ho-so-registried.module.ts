import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//Angular Material
import { MatTabsModule, MatIconModule, MatDividerModule, MatCardModule } from '@angular/material';

//My Modules
import { GroupByModule } from '../../../common/group-by/group-by.module';

//My Components
import { NopHoSoRegistriedComponent } from './nop-ho-so-registried.component';
import { NopHoSoDanhSachComponent } from '../nop-ho-so-danh-sach/nop-ho-so-danh-sach.component';
import { NopHoSoDuyetComponent } from '../nop-ho-so-duyet/nop-ho-so-duyet.component';
import { NopHoSoDaNopComponent } from '../nop-ho-so-da-nop/nop-ho-so-da-nop.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        MatTabsModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        GroupByModule
    ],
    declarations: [NopHoSoRegistriedComponent, NopHoSoDanhSachComponent, NopHoSoDaNopComponent, NopHoSoDuyetComponent],
    exports: [NopHoSoRegistriedComponent]
})

export class NopHoSoRegistriedModule { }