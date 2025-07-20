import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { postRoutes } from './posts.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AncodeFindByKeyPipeModule } from '@ancode/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostListComponent } from 'app/modules/admin/dashboards/posts/list/list.component';
import { PostDetailComponent } from 'app/modules/admin/dashboards/posts/details/details.component';
import { QuillModule } from 'ngx-quill';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';


@NgModule({
    declarations : [
        PostsComponent,
        PostListComponent,
        PostDetailComponent
    ],
    imports : [
        RouterModule.forChild(postRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTooltipModule,
        AncodeFindByKeyPipeModule,
        SharedModule,
        MatTabsModule,
        MatPaginatorModule,
        MatMenuModule,
        QuillModule.forRoot(),
    ],
    providers : [DatePipe]
})

export class PostsModule{}