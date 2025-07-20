import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AncodeAlertComponent } from '@ancode/components/alert/alert.component';

@NgModule({
    declarations: [
        AncodeAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        AncodeAlertComponent
    ]
})
export class AncodeAlertModule
{
}
