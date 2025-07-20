import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AncodeLoadingBarService } from '@ancode/components/loading-bar/loading-bar.service';

@Injectable()
export class AncodeLoadingBarInterceptor implements HttpInterceptor
{
    handleRequestsAutomatically!: boolean;

    /**
     * Constructor
     */
    constructor(
        private _ancodeLoadingBarService: AncodeLoadingBarService
    )
    {
        // Subscribe to the auto
        this._ancodeLoadingBarService.auto$
            .subscribe((value) => {
                this.handleRequestsAutomatically = value;
            });
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // If the Auto mode is turned off, do nothing
        if ( !this.handleRequestsAutomatically )
        {
            return next.handle(req);
        }

        // Set the loading status to true
        this._ancodeLoadingBarService._setLoadingStatus(true, req.url);

        return next.handle(req).pipe(
            finalize(() => {
                // Set the status to false if there are any errors or the request is completed
                this._ancodeLoadingBarService._setLoadingStatus(false, req.url);
            }));
    }
}
