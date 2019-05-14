import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NopHoSoUnregistryComponent } from './nop-ho-so-unregistry.component';

//Angular Material
import { MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        IonicModule,
        MatToolbarModule,
        RouterModule
    ],
    declarations: [NopHoSoUnregistryComponent],
    exports: [NopHoSoUnregistryComponent]
})

export class NopHoSoUnregistryModule {}