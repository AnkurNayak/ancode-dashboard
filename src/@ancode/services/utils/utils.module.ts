import { NgModule } from '@angular/core';
import { AncodeUtilsService } from '@ancode/services/utils/utils.service';

@NgModule({
    providers: [
        AncodeUtilsService
    ]
})
export class AncodeUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _ancodeUtilsService: AncodeUtilsService)
    {
    }
}
