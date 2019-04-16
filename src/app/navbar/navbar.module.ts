import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NavbarComponent } from './navbar.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        IonicModule
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class NavbarModule {}
