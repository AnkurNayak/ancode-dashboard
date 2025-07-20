import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Item, Items } from 'app/modules/admin/dashboards/file-manager/file-manager.types';

@Injectable({
  providedIn: 'root',
})
export class FileManagerService {
  // Private
  private _item: BehaviorSubject<Item | any> = new BehaviorSubject(null);
  private _items: BehaviorSubject<Items | any> = new BehaviorSubject(null);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for items
   */
  get items$(): Observable<Items> {
    return this._items.asObservable();
  }

  /**
   * Getter for item
   */
  get item$(): Observable<Item> {
    return this._item.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get items
   */

  getItems(folderId: string | null = null): Observable<Item[]> {
    let params = new HttpParams();
    if (folderId !== null) {
      params = params.set('folderId', folderId);
    }
    return this._httpClient
      .get<Items>('api/dashboards/file-manager', { params })
      .pipe(
        tap((response: any) => {
          this._items.next(response);
        })
      );
  }

  /**
   * Get item by id
   */
  getItemById(id: string): Observable<Item> {
    return this._items.pipe(
      take(1),
      map((items) => {
        // Find within the folders and files
        const item =
          [...items.folders, ...items.files].find((value) => value.id === id) ||
          null;
        // Update the item
        this._item.next(item);

        // Return the item
        return item;
      }),
      switchMap((item) => {
        if (!item) {
          return throwError('Could not found the item with id of ' + id + '!');
        }

        return of(item);
      })
    );
  }
}
