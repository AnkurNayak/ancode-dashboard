import { Injectable } from '@angular/core';
import { assign, cloneDeep} from 'lodash-es';
import { AncodeMockApiService, AncodeMockApiUtils } from '@ancode/lib/mock-api';
import { categories as categoriesData, posts as postsData} from 'app/mock-api/dashboards/posts/data';

@Injectable({
    providedIn: 'root'
})

export class PostsMockApi
{
    private _categories: any[] = categoriesData;
    private _posts: any[] = postsData;

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
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._ancodeMockApiService
            .onGet('api/dashboards/posts/categories')
            .reply(() => [200, cloneDeep(this._categories)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Posts - GET
        // -----------------------------------------------------------------------------------------------------
        this._ancodeMockApiService
            .onGet('api/dashboards/posts/all', 300)
            .reply(({request}) => {

                // Get available queries
                const search = request.params.get('search');

                // Clone the posts
                let posts: any[] | null = cloneDeep(this._posts);


                // If search exists...
                if ( search )
                {
                    // Filter the posts
                    posts = posts.filter(post => post.title && post.title.toLowerCase().includes(search.toLowerCase()));
                }

                // Return the response
                return [
                    200,
                    {
                        posts
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Post - GET
        // -----------------------------------------------------------------------------------------------------
        this._ancodeMockApiService
            .onGet('api/dashboards/posts/post')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the posts
                const posts = cloneDeep(this._posts);

                // Find the post
                const post = posts.find(item => item.id === id);

                // Return the response
                return [200, post];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Post - POST
        // -----------------------------------------------------------------------------------------------------
        this._ancodeMockApiService
            .onPost('api/dashboards/posts/post')
            .reply(() => {

                // Generate a new post
                const newPost = {
                    id: AncodeMockApiUtils.guid(),
                    title: "",
                    slug: "",
                    description: "",
                    thumbnail: "",
                    images: [],
                    category: "",
                    updatedAt: "",
                    featured: true,
                    author: ""
                    };

                // Unshift the new post
                this._posts.unshift(newPost);

                // Return the response
                return [200, newPost];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Post - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._ancodeMockApiService
            .onPatch('api/dashboards/posts/post')
            .reply(({request}) => {

                // Get the id and post
                const id = request.body.id;
                const post = cloneDeep(request.body.post);

                // Prepare the updated post
                let updatedPost = null;

                // Find the post and update it
                this._posts.forEach((item, index, posts) => {

                    if ( item.id === id )
                    {
                        // Update the post
                        posts[index] = assign({}, posts[index], post);

                        // Store the updated post
                        updatedPost = posts[index];
                    }
                });

                // Return the response
                return [200, updatedPost];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Post - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._ancodeMockApiService
            .onDelete('api/dashboards/posts/post')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the post and delete it
                this._posts.forEach((item, index) => {

                    if ( item.id === id )
                    {
                        this._posts.splice(index, 1);
                    }
                });

                // Return the response
                return [200, true];
            });
        }

}
