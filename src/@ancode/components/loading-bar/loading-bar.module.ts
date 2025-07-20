import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AncodeLoadingBarComponent } from '@ancode/components/loading-bar/loading-bar.component';
import { AncodeLoadingBarInterceptor } from '@ancode/components/loading-bar/loading-bar.interceptor';

@NgModule({
    declarations: [
        AncodeLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        AncodeLoadingBarComponent
    ],
    providers   : [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AncodeLoadingBarInterceptor,
            multi   : true
        }
    ]
})
export class AncodeLoadingBarModule
{
}
