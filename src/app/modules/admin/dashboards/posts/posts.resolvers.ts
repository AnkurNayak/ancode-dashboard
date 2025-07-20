import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category, Post } from 'app/modules/admin/dashboards/posts/posts.types';
import { PostsService } from 'app/modules/admin/dashboards/posts/posts.service';


@Injectable({
    providedIn : 'root'
})

export class PostCategoriesResolver{
    /**
     * Constructor
     */
    constructor(private _postsService: PostsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]>
    {
        return this._postsService.getCategories();
    }
}

@Injectable({
    providedIn: 'root'
})

export class PostsResolver{
    /**
     * Constructor
     */
    constructor(private _postsService: PostsService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ posts: Post[] }>
    {
        return this._postsService.getPosts();
    }
}

@Injectable({
    providedIn: 'root'
})

export class PostResolver{
    /**
     * constructor
     */
    constructor(private _router: Router, private _postsService : PostsService){}
     // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post>
    {
       const postId = route.paramMap.get('id')
       if(postId){
        return this._postsService.getPostById(postId)
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
       
       return throwError("Post didn't found")
    }

}