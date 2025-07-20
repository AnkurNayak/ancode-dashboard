import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AncodeMediaWatcherModule } from '@ancode/services/media-watcher';
import { AncodeTailwindConfigModule } from '@ancode/services/tailwind';
import { AncodeConfirmationModule } from '@ancode/services/confirmation';
import { AncodeSplashScreenModule } from '@ancode/services/splash-screen';


@NgModule({
    imports  : [
        AncodeSplashScreenModule,
        AncodeMediaWatcherModule,
        AncodeTailwindConfigModule,
        AncodeConfirmationModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class AncodeModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: AncodeModule)
    {
        if ( parentModule )
        {
            throw new Error('AncodeModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
