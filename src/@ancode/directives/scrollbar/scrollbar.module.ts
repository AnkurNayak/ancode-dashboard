import { NgModule } from '@angular/core';
import { AncodeScrollbarDirective } from '@ancode/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        AncodeScrollbarDirective
    ],
    exports     : [
        AncodeScrollbarDirective
    ]
})
export class AncodeScrollbarModule
{
}
