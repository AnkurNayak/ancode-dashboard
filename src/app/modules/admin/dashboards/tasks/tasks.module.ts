import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule, MAT_DATE_FORMATS } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import moment from "moment";
import { AncodeFindByKeyPipeModule } from "@ancode/pipes/find-by-key";
import { SharedModule } from "app/shared/shared.module";
import { TasksDetailsComponent } from "app/modules/admin/dashboards/tasks/details/details.component";
import { TasksListComponent } from "app/modules/admin/dashboards/tasks/list/list.component";
import { TasksComponent } from "app/modules/admin/dashboards/tasks/tasks.component";
import { tasksRoutes } from "app/modules/admin/dashboards/tasks/tasks.routing";
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatMomentDateModule } from "@angular/material-moment-adapter";


@NgModule({
    declarations: [
        TasksComponent,
        TasksDetailsComponent,
        TasksListComponent
    ],
    imports     : [
        RouterModule.forChild(tasksRoutes),
        DragDropModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatProgressBarModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatTooltipModule,
        AncodeFindByKeyPipeModule,
        SharedModule

    ],
    providers   : [
        {
            provide : MAT_DATE_FORMATS,
            useValue: {
                parse  : {
                    dateInput: moment.ISO_8601
                },
                display: {
                    dateInput         : 'll',
                    monthYearLabel    : 'MMM YYYY',
                    dateA11yLabel     : 'LL',
                    monthYearA11yLabel: 'MMMM YYYY'
                }
            }
        }
    ]
})
export class TasksModule
{
}
