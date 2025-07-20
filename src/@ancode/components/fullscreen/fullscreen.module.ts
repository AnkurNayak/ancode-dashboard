import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { AncodeFullscreenComponent } from '@ancode/components/fullscreen/fullscreen.component';

@NgModule({
    declarations: [
        AncodeFullscreenComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports     : [
        AncodeFullscreenComponent
    ]
})
export class AncodeFullscreenModule
{
}
