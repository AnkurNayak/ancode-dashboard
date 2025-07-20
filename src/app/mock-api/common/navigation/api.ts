import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { AncodeNavigationItem } from '@ancode/components/navigation';
import { AncodeMockApiService } from '@ancode/lib/mock-api';
import { defaultNavigation } from 'app/mock-api/common/navigation/data';

@Injectable({
    providedIn: 'root'
})
export class NavigationMockApi
{
    private readonly _defaultNavigation: AncodeNavigationItem[] = defaultNavigation;

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
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._ancodeMockApiService
            .onGet('api/common/navigation')
            .reply(() => {
                return [
                    200,
                    {
                        default   : cloneDeep(this._defaultNavigation),
                    }
                ];
            });
    }
}
