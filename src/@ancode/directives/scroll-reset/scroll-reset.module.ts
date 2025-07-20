import { NgModule } from '@angular/core';
import { AncodeScrollResetDirective } from '@ancode/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        AncodeScrollResetDirective
    ],
    exports     : [
        AncodeScrollResetDirective
    ]
})
export class AncodeScrollResetModule
{
}
