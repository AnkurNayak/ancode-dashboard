import { Component, ViewEncapsulation } from '@angular/core';
import { ancodeAnimations } from '@ancode/animations';

@Component({
    selector     : 'auth-confirmation-required',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : ancodeAnimations
})
export class AuthConfirmationRequiredComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
