import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AncodeDrawerComponent } from '@ancode/components/drawer/drawer.component';

@NgModule({
    declarations: [
        AncodeDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AncodeDrawerComponent
    ]
})
export class AncodeDrawerModule
{
}
