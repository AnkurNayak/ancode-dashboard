import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AncodeCardComponent } from '@ancode/components/card/card.component';

@NgModule({
    declarations: [
        AncodeCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AncodeCardComponent
    ]
})
export class AncodeCardModule
{
}
