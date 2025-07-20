import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from 'app/modules/admin/dashboards/home/home.service';

@Injectable({
    providedIn: 'root'
})
export class HomeResolver
{
    /**
     * Constructor
     */
    constructor(private _homeService: HomeService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._homeService.getData();
    }
}
