import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatButtonModule } from '@angular/material/button';
import { AncodeDrawerModule } from '@ancode/components/drawer';
import { SettingsComponent } from 'app/layout/common/settings/settings.component';

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatTooltipModule,
        AncodeDrawerModule,
        MatButtonModule
    ],
    exports     : [
        SettingsComponent
    ]
})
export class SettingsModule
{
}
