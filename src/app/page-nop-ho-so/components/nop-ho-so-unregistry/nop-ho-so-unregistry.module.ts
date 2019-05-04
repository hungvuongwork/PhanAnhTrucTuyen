import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NopHoSoUnregistryComponent } from './nop-ho-so-unregistry.component';

//Angular Material
import { MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        IonicModule,
        MatToolbarModule,
    ],
    declarations: [NopHoSoUnregistryComponent],
    exports: [NopHoSoUnregistryComponent]
})

export class NopHoSoUnregistryModule {}