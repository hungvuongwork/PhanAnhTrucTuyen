import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatCardModule } from '@angular/material';

//My Modules

//My Component
import { TinTucComponent } from './tin-tuc.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
    ],
    declarations: [TinTucComponent],
    exports: [TinTucComponent]
})

export class TinTucModule { }

