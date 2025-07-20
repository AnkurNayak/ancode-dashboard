import { Route } from "@angular/router";
import { HomeComponent } from "app/modules/admin/dashboards/home/home.component";
import { HomeResolver } from "app/modules/admin/dashboards/home/home.resolvers";

export const homeRoutes: Route[] = [
    {
        path     : '',
        component: HomeComponent,
        resolve  : {
            data: HomeResolver
        }
    }
];
