import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TasksService } from 'app/modules/admin/dashboards/tasks/tasks.service';
import { Tag, Task } from 'app/modules/admin/dashboards/tasks/tasks.types';

@Injectable({
    providedIn: 'root'
})
export class TasksTagsResolver
{
    /**
     * Constructor
     */
    constructor(private _tasksService: TasksService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag[]>
    {
        return this._tasksService.getTags();
    }
}

@Injectable({
    providedIn: 'root'
})
export class TasksResolver
{
    /**
     * Constructor
     */
    constructor(private _tasksService: TasksService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task[]>
    {
        return this._tasksService.getTasks();
    }
}

@Injectable({
    providedIn: 'root'
})
export class TasksTaskResolver
{
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _tasksService: TasksService
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
        const id = route.paramMap.get('id');
        if (id !== null) {
          return this._tasksService.getTaskById(id).pipe(
            catchError((error) => {
              // Log the error
              console.error(error);
      
              // Get the parent URL
              const parentUrl = state.url.split('/').slice(0, -1).join('/');
      
              // Navigate to the parent URL
              this._router.navigateByUrl(parentUrl);
      
              // Throw an error
              return throwError(error);
            })
          );
        } else {
          // Handle the case where the 'id' parameter is null
          // For example, you can navigate to an error page or return a default task
          return throwError('Invalid task ID');
        }
      }
      
}
