import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AncodeMasonryModule } from '@ancode/components/masonry';
import { SharedModule } from 'app/shared/shared.module';
import { NotesDetailsComponent } from 'app/modules/admin/dashboards/notes/details/details.component';
import { NotesLabelsComponent } from 'app/modules/admin/dashboards/notes/labels/labels.component';
import { NotesListComponent } from 'app/modules/admin/dashboards/notes/list/list.component';
import { NotesComponent } from 'app/modules/admin/dashboards/notes/notes.component';
import { notesRoutes } from 'app/modules/admin/dashboards/notes/notes.routing';

@NgModule({
    declarations: [
        NotesComponent,
        NotesDetailsComponent,
        NotesListComponent,
        NotesLabelsComponent
    ],
    imports     : [
        RouterModule.forChild(notesRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        AncodeMasonryModule,
        SharedModule
    ]
})
export class NotesModule
{
}
