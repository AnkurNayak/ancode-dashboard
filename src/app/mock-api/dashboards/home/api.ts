import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { home as homeData } from 'app/mock-api/dashboards/home/data';
import { AncodeMockApiService } from '@ancode/lib/mock-api';

@Injectable({
    providedIn: 'root'
})
export class HomeMockApi
{
    private _home: any = homeData;

    /**
     * Constructor
     */
    constructor(private _ancodeMockApiService: AncodeMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._ancodeMockApiService
            .onGet('api/dashboards/home')
            .reply(() => [200, cloneDeep(this._home)]);
    }
}
