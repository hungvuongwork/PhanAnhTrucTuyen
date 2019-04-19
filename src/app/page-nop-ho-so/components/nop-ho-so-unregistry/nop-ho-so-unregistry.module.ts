import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NopHoSoUnregistryComponent } from './nop-ho-so-unregistry.component';

//Angular Material
import { MatTabsModule, MatToolbarModule, MatIconModule, MatButtonToggleModule, MatCardModule, MatListModule, MatDividerModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        IonicModule,
        MatToolbarModule,
        MatButtonModule
    ],
    declarations: [NopHoSoUnregistryComponent],
    exports: [NopHoSoUnregistryComponent]
})

export class NopHoSoUnregistryModule {}