import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { analytics as analyticsData } from 'app/mock-api/dashboards/analytics/data';
import { AncodeMockApiService } from '@ancode/lib/mock-api/mock-api.service';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsMockApi
{
    private _analytics: any = analyticsData;

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
            .onGet('api/dashboards/analytics')
            .reply(() => [200, cloneDeep(this._analytics)]);
    }
}
