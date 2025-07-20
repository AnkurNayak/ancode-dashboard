import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { FileManagerDetailsComponent } from 'app/modules/admin/dashboards/file-manager/details/details.component';
import { FileManagerComponent } from 'app/modules/admin/dashboards/file-manager/file-manager.component';
import { fileManagerRoutes } from 'app/modules/admin/dashboards/file-manager/file-manager.routing';
import { FileManagerListComponent } from 'app/modules/admin/dashboards/file-manager/list/list.component';

@NgModule({
    declarations: [
        FileManagerComponent,
        FileManagerDetailsComponent,
        FileManagerListComponent
    ],
    imports     : [
        RouterModule.forChild(fileManagerRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTooltipModule,
        SharedModule
    ]
})
export class FileManagerModule
{
}
