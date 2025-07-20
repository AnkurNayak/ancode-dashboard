import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedModule } from "app/shared/shared.module";
import { HomeComponent } from "app/modules/admin/dashboards/home/home.component";
import { homeRoutes } from "app/modules/admin/dashboards/home/home.routing";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        RouterModule.forChild(homeRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        NgApexchartsModule,
        SharedModule
    ]
})
export class HomeModule
{
}