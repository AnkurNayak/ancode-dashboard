import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AncodeNavigationService } from '@ancode/components/navigation/navigation.service';
import { AncodeNavigationItem } from '@ancode/components/navigation/navigation.types';
import { AncodeNavigationComponent } from '@ancode/components/navigation/classy/classy.component';

@Component({
    selector       : 'ancode-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AncodeNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item!: AncodeNavigationItem;
    @Input() name!: string;

    private _ancodeNavigationComponent!: AncodeNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _ancodeNavigationService: AncodeNavigationService
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
        // Get the parent navigation component
        this._ancodeNavigationComponent = this._ancodeNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._ancodeNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(1);
        this._unsubscribeAll.complete();
    }
}
