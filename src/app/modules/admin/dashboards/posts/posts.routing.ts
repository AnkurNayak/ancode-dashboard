import { Route } from "@angular/router";
import { PostsComponent } from "app/modules/admin/dashboards/posts/posts.component";
import { PostCategoriesResolver, PostResolver, PostsResolver } from "app/modules/admin/dashboards/posts/posts.resolvers";
import { PostListComponent } from "app/modules/admin/dashboards/posts/list/list.component";
import { PostDetailComponent } from "app/modules/admin/dashboards/posts/details/details.component";

export const postRoutes: Route[] = [
    {
        path : '',
        component : PostsComponent,
        resolve : {
            categories : PostCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: PostListComponent,
                resolve  : {
                    posts: PostsResolver
                }
            },
            {
                path     : ':id',
                component: PostDetailComponent,
                resolve  : {
                    post: PostResolver
                }
            }
        ]
    }
]