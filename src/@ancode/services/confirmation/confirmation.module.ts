import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AncodeConfirmationService } from '@ancode/services/confirmation/confirmation.service';
import { AncodeConfirmationDialogComponent } from '@ancode/services/confirmation/dialog/dialog.component';

@NgModule({
    declarations: [
        AncodeConfirmationDialogComponent
    ],
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        AncodeConfirmationService
    ]
})
export class AncodeConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _ancodeConfirmationService: AncodeConfirmationService)
    {
    }
}
