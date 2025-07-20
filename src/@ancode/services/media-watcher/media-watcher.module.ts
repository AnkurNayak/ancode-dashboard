import { NgModule } from '@angular/core';
import { AncodeMediaWatcherService } from '@ancode/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        AncodeMediaWatcherService
    ]
})
export class AncodeMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _ancodeMediaWatcherService: AncodeMediaWatcherService)
    {
    }
}
