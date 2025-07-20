import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AncodeConfigService } from '@ancode/services/config';
import { AncodeTailwindService } from '@ancode/services/tailwind';
import { AppConfig, Scheme, Theme } from 'app/core/config/app.config';
import { Layout } from 'app/layout/layout.types';

@Component({
    selector     : 'settings',
    templateUrl  : './settings.component.html',
    styles       : [
        `
            settings {
                position: static;
                display: block;
                flex: none;
                width: auto;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit, OnDestroy
{
    config!: AppConfig;
    layout!: Layout;
    scheme!: 'dark' | 'light';
    isDarkTheme: boolean = true;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _ancodeConfigService: AncodeConfigService,
        private _ancodeTailwindService: AncodeTailwindService
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
        // Get the themes
        this._ancodeTailwindService.tailwindConfig$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.isDarkTheme = config.scheme.dark === 'dark';
            });

        // Subscribe to config changes
        this._ancodeConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: AppConfig) => {
                // Store the config
                this.config = config;
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the layout on the config
     *
     * @param layout
     */
    setLayout(layout: string): void
    {
        // Clear the 'layout' query param to allow layout changes
        this._router.navigate([], {
            queryParams        : {
                layout: null
            },
            queryParamsHandling: 'merge'
        }).then(() => {

            // Set the config
            this._ancodeConfigService.config = {layout};
        });
    }

     /**
     * Toggle between dark and light themes
     */
     toggleTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        this._ancodeConfigService.config = { scheme: this.isDarkTheme ? 'light' : 'dark' };
      }
    result(){}
}
