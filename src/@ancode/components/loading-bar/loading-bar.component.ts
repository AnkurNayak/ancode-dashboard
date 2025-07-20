import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AncodeLoadingBarService } from '@ancode/components/loading-bar/loading-bar.service';

@Component({
    selector     : 'ancode-loading-bar',
    templateUrl  : './loading-bar.component.html',
    styleUrls    : ['./loading-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'ancodeLoadingBar'
})
export class AncodeLoadingBarComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() autoMode: boolean = true;
    mode!: 'determinate' | 'indeterminate';
    progress: number = 0;
    show: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _ancodeLoadingBarService: AncodeLoadingBarService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Auto mode
        if ( 'autoMode' in changes )
        {
            // Set the auto mode in the service
            this._ancodeLoadingBarService.setAutoMode(coerceBooleanProperty(changes['autoMode'].currentValue));
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the service
        this._ancodeLoadingBarService.mode$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.mode = value;
            });

        this._ancodeLoadingBarService.progress$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.progress = value;
            });

        this._ancodeLoadingBarService.show$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.show = value;
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
