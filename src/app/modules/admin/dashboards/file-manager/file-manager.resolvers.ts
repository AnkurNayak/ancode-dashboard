import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FileManagerService } from 'app/modules/admin/dashboards/file-manager/file-manager.service';
import { Item } from 'app/modules/admin/dashboards/file-manager/file-manager.types';

@Injectable({
  providedIn: 'root',
})
export class FileManagerItemsResolver {
  /**
   * Constructor
   */
  constructor(private _fileManagerService: FileManagerService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item[]> {
    return this._fileManagerService.getItems();
  }
}

@Injectable({
  providedIn: 'root',
})
export class FileManagerFolderResolver {
  /**
   * Constructor
   */
  constructor(
    private _router: Router,
    private _fileManagerService: FileManagerService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item[]> {
    return this._fileManagerService
      .getItems(route.paramMap.get('folderId'))
      .pipe(
        // Error here means the requested task is not available
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
}

@Injectable({
  providedIn: 'root',
})
export class FileManagerItemResolver {
  /**
   * Constructor
   */
  constructor(
    private _router: Router,
    private _fileManagerService: FileManagerService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item> {
    const id = route.paramMap.get('id');
    if (id !== null) {
      return this._fileManagerService.getItemById(id).pipe(
        // Error here means the requested task is not available
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
    } else {
      return throwError('Inavlid file Id');
    }
  }
}
