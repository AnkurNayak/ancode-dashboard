import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge } from 'lodash-es';
import { AncodeConfirmationConfig } from '@ancode/services/confirmation/confirmation.types';
import { AncodeConfirmationDialogComponent } from '@ancode/services/confirmation/dialog/dialog.component';

@Injectable()
export class AncodeConfirmationService
{
    private _defaultConfig: AncodeConfirmationConfig = {
        title      : 'Confirm action',
        message    : 'Are you sure you want to confirm this action?',
        icon       : {
            show : true,
            name : 'heroicons_outline:exclamation-triangle',
            color: 'warn'
        },
        actions    : {
            confirm: {
                show : true,
                label: 'Confirm',
                color: 'warn'
            },
            cancel : {
                show : true,
                label: 'Cancel'
            }
        },
        dismissible: false
    };

    /**
     * Constructor
     */
    constructor(
        private _matDialog: MatDialog
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(config: AncodeConfirmationConfig = {}): MatDialogRef<AncodeConfirmationDialogComponent>
    {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(AncodeConfirmationDialogComponent, {
            autoFocus   : false,
            disableClose: !userConfig.dismissible,
            data        : userConfig,
            panelClass  : 'ancode-confirmation-dialog-panel'
        });
    }
}
