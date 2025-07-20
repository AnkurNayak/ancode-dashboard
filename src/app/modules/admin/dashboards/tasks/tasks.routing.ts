import { Route } from '@angular/router';
import { TasksDetailsComponent } from 'app/modules/admin/dashboards/tasks/details/details.component';
import { TasksListComponent } from 'app/modules/admin/dashboards/tasks/list/list.component';
import { TasksComponent } from 'app/modules/admin/dashboards/tasks/tasks.component';
import { CanDeactivateTasksDetails } from 'app/modules/admin/dashboards/tasks/tasks.guards';
import { TasksTagsResolver, TasksResolver, TasksTaskResolver } from 'app/modules/admin/dashboards/tasks/tasks.resolvers';

export const tasksRoutes: Route[] = [
    {
        path     : '',
        component: TasksComponent,
        resolve  : {
            tags: TasksTagsResolver
        },
        children : [
            {
                path     : '',
                component: TasksListComponent,
                resolve  : {
                    tasks: TasksResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : TasksDetailsComponent,
                        resolve      : {
                            task: TasksTaskResolver
                        },
                        canDeactivate: [CanDeactivateTasksDetails]
                    }
                ]
            }
        ]
    }
];
