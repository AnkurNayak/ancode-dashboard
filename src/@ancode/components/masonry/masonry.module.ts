import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AncodeMasonryComponent } from '@ancode/components/masonry/masonry.component';

@NgModule({
    declarations: [
        AncodeMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        AncodeMasonryComponent
    ]
})
export class AncodeMasonryModule
{
}
