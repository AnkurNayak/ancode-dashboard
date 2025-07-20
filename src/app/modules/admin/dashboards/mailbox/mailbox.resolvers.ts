import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MailboxService } from 'app/modules/admin/dashboards/mailbox/mailbox.service';
import { Mail, MailFilter, MailFolder, MailLabel } from 'app/modules/admin/dashboards/mailbox/mailbox.types';

@Injectable({
    providedIn: 'root'
})
export class MailboxFoldersResolver
{
    /**
     * Constructor
     */
    constructor(private _mailboxService: MailboxService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MailFolder[]>
    {
        return this._mailboxService.getFolders();
    }
}

@Injectable({
    providedIn: 'root'
})
export class MailboxFiltersResolver
{
    /**
     * Constructor
     */
    constructor(private _mailboxService: MailboxService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MailFilter[]>
    {
        return this._mailboxService.getFilters();
    }
}

@Injectable({
    providedIn: 'root'
})
export class MailboxLabelsResolver
{
    /**
     * Constructor
     */
    constructor(private _mailboxService: MailboxService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MailLabel[]>
    {
        return this._mailboxService.getLabels();
    }
}

@Injectable({
    providedIn: 'root'
})
export class MailboxMailsResolver
{
    /**
     * Constructor
     */
    constructor(
        private _mailboxService: MailboxService,
        private _router: Router
    )
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mail[]> | any
    {
      const page = route.paramMap.get('page');
        // Don't allow page param to go below 1
        if ( page && parseInt(page, 10) <= 0 )
        {
            // Get the parent url
            const url = state.url.split('/').slice(0, -1).join('/') + '/1';

            // Navigate to there
            this._router.navigateByUrl(url);

            // Don't allow request to go through
            return false;
        }

        // Create and build the sources array
        const sources = [];

        // If folder is set on the parameters...
        const folder = route.paramMap.get('folder');
        if (folder && page) {
            sources.push(this._mailboxService.getMailsByFolder(folder, page));
        }

        // If filter is set on the parameters...
        const filter = route.paramMap.get('filter');
        if (filter && page) {
            sources.push(this._mailboxService.getMailsByFilter(filter, page));
        }

        // If label is set on the parameters...
        const label = route.paramMap.get('label');
        if (label && page) {
            sources.push(this._mailboxService.getMailsByLabel(label, page));
        }

        // Fork join all the sources
        return forkJoin(sources)
            .pipe(
                finalize(() => {

                    // If there is no selected mail, reset the mail every
                    // time mail list changes. This will ensure that the
                    // mail will be reset while navigating between the
                    // folders/filters/labels but it won't reset on page
                    // reload if we are reading a mail.

                    // Try to get the current activated route
                    let currentRoute = route;
                    while ( currentRoute.firstChild )
                    {
                        currentRoute = currentRoute.firstChild;
                    }

                    // Make sure there is no 'id' parameter on the current route
                    if ( !currentRoute.paramMap.get('id') )
                    {
                        // Reset the mail
                        this._mailboxService.resetMail().subscribe();
                    }
                }),

                // Error here means the requested page is not available
                catchError((error) => {

                    // Log the error
                    console.error(error.message);

                    // Get the parent url and append the last possible page number to the parent url
                    const url = state.url.split('/').slice(0, -1).join('/') + '/' + error.pagination.lastPage;

                    // Navigate to there
                    this._router.navigateByUrl(url);

                    // Throw an error
                    return throwError(error);
                })
            );
    }
}

@Injectable({
    providedIn: 'root'
})
export class MailboxMailResolver
{
    /**
     * Constructor
     */
    constructor(
        private _mailboxService: MailboxService,
        private _router: Router
    )
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mail>
    {
      const mailId = route.paramMap.get('id');
      if(mailId){
        return this._mailboxService.getMailById(mailId)
        .pipe(
            // Error here means the requested mail is either
            // not available on the requested page or not
            // available at all
            catchError((error) => {

                // Log the error
                console.error(error);

                // Get the parent url
                const parentUrl = state.url.split('/').slice(0, -1).join('/');

                // Navigate to there
                this._router.navigateByUrl(parentUrl);

                // Throw an error
                return throwError(error);
            })
        );
      }
      else{
        return throwError('Invalid Mail ID')
      }
       
    }
}
