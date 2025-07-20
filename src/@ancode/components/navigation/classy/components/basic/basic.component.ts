import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AncodeUtilsService } from '@ancode/services/utils';
import { AncodeNavigationService } from '@ancode/components/navigation/navigation.service';
import { AncodeNavigationItem } from '@ancode/components/navigation/navigation.types';
import { AncodeNavigationComponent } from '@ancode/components/navigation/classy/classy.component';

@Component({
    selector       : 'ancode-navigation-basic-item',
    templateUrl    : './basic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AncodeNavigationBasicItemComponent implements OnInit, OnDestroy
{
    @Input() item!: AncodeNavigationItem;
    @Input() name!: string;

    isActiveMatchOptions: IsActiveMatchOptions;
    private _ancodeNavigationComponent!: AncodeNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _ancodeNavigationService: AncodeNavigationService,
        private _ancodeUtilsService: AncodeUtilsService
    )
    {
        // Set the equivalent of {exact: false} as default for active match options.
        // We are not assigning the item.isActiveMatchOptions directly to the
        // [routerLinkActiveOptions] because if it's "undefined" initially, the router
        // will throw an error and stop working.
        this.isActiveMatchOptions = this._ancodeUtilsService.subsetMatchOptions;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Set the "isActiveMatchOptions" either from item's
        // "isActiveMatchOptions" or the equivalent form of
        // item's "exactMatch" option
        this.isActiveMatchOptions =
            this.item.isActiveMatchOptions ?? this.item.exactMatch
                ? this._ancodeUtilsService.exactMatchOptions
                : this._ancodeUtilsService.subsetMatchOptions;

        // Get the parent navigation component
        this._ancodeNavigationComponent = this._ancodeNavigationService.getComponent(this.name);

        // Mark for check
        this._changeDetectorRef.markForCheck();

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
