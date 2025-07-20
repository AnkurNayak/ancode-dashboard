import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, tap, take, filter } from 'rxjs/operators';
import { Category, Post } from 'app/modules/admin/dashboards/posts/posts.types';
@Injectable({
    providedIn: 'root'
})
export class PostsService
{
  // Private
  private _categories: BehaviorSubject<Category[] | any> = new BehaviorSubject(null);
  private _post: BehaviorSubject<Post | any> = new BehaviorSubject(null);
  private _posts: BehaviorSubject<Post[] | any> = new BehaviorSubject(null);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for categories
   */
  get categories$(): Observable<Category[]>
  {
      return this._categories.asObservable();
  }

  /**
   * Getter for post
   */
  get post$(): Observable<Post>
  {
      return this._post.asObservable();
  }

  /**
   * Getter for posts
   */
  get posts$(): Observable<Post[]>
  {
      return this._posts.asObservable();
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get categories
   */
  getCategories(): Observable<Category[]>
  {
      return this._httpClient.get<Category[]>('api/dashboards/posts/categories').pipe(
          tap((categories) => {
              this._categories.next(categories);
          })
      );
  }

  /**
   * Get posts
   *
   *
   * @param search
   */
  getPosts(search: string = ''):
      Observable<{posts: Post[] }>
  {
      return this._httpClient.get<{ posts: Post[] }>('api/dashboards/posts/all', {
          params: {
              search
          }
      }).pipe(
          tap((response) => {
              this._posts.next(response.posts);
          })
      );
  }

  /**
   * Get post by id
   */
  getPostById(id: string): Observable<Post>
  {
      return this._posts.pipe(
          take(1),
          map((posts) => {

              // Find the post
              const post = posts.find((item  : any) => item.id === id) || null;

              // Update the post
              this._post.next(post);

              // Return the post
              return post;
          }),
          switchMap((post) => {

              if ( !post )
              {
                  return throwError('Could not found post with id of ' + id + '!');
              }

              return of(post);
          })
      );
  }

  /**
   * Create post
   */
  createPost(): Observable<Post>
  {
      return this.posts$.pipe(
          take(1),
          switchMap(posts => this._httpClient.post<Post>('api/dashboards/posts/post', {}).pipe(
              map((newPost) => {

                  // Update the posts with the new post
                  this._posts.next([newPost, ...posts]);

                  // Return the new post
                  return newPost;
              })
          ))
      );
  }

  /**
   * Update post
   *
   * @param id
   * @param post
   */
  updatePost(id: string, post: Post): Observable<Post>
  {
      return this.posts$.pipe(
          take(1),
          switchMap(posts => this._httpClient.patch<Post>('api/dashboards/posts/post', {
              id,
              post
          }).pipe(
              map((updatedPost) => {

                  // Find the index of the updated post
                  const index = posts.findIndex(item => item.id === id);

                  // Update the post
                  posts[index] = updatedPost;

                  // Update the posts
                  this._posts.next(posts);

                  // Return the updated post
                  return updatedPost;
              }),
              switchMap(updatedPost => this.post$.pipe(
                  take(1),
                  filter(item => item && item.id === id),
                  tap(() => {

                      // Update the post if it's selected
                      this._post.next(updatedPost);

                      // Return the updated post
                      return updatedPost;
                  })
              ))
          ))
      );
  }

  /**
   * Delete the post
   *
   * @param id
   */
  deletePost(id: string): Observable<boolean>
  {
      return this.posts$.pipe(
          take(1),
          switchMap(posts => this._httpClient.delete('api/dashboards/posts/post', {params: {id}}).pipe(
              map((isDeleted: any) => {

                  // Find the index of the deleted post
                  const index = posts.findIndex(item => item.id === id);

                  // Delete the post
                  posts.splice(index, 1);

                  // Update the posts
                  this._posts.next(posts);

                  // Return the deleted status
                  return isDeleted;
              })
          ))
      );
  }

}