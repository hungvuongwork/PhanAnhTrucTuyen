import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

//My Components
import { TinTucComponent } from './tin-tuc.component';

import { MatCardModule, MatIconModule, MatListModule, MatDividerModule } from '@angular/material';

@NgModule({
    imports: [
        IonicModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatDividerModule
    ],
    declarations: [TinTucComponent],
    exports: [TinTucComponent]
})

export class TinTucModule { }


