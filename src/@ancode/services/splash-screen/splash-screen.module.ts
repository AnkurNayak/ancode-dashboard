import { NgModule } from '@angular/core';
import { AncodeSplashScreenService } from '@ancode/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        AncodeSplashScreenService
    ]
})
export class AncodeSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _ancodeSplashScreenService: AncodeSplashScreenService)
    {
    }
}
