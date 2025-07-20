import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AncodeConfirmationConfig } from '../confirmation.types';

@Component({
    selector     : 'ancode-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        /* language=SCSS */
        `
            .ancode-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-dialog-container {
                    padding: 0 !important;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class AncodeConfirmationDialogComponent implements OnInit
{
    /**
     * Constructor
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: AncodeConfirmationConfig,
        public matDialogRef: MatDialogRef<AncodeConfirmationDialogComponent>
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

}
