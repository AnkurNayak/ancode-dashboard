import { ModuleWithProviders, NgModule } from '@angular/core';
import { AncodeConfigService } from '@ancode/services/config/config.service';
import { ANCODE_APP_CONFIG } from '@ancode/services/config/config.constants';


@NgModule()
export class AncodeConfigModule
{
    /**
     * Constructor
     */
    constructor(private _ancodeConfigService: AncodeConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<AncodeConfigModule>
    {
        return {
            ngModule : AncodeConfigModule,
            providers: [
                {
                    provide : ANCODE_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
