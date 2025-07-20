import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from 'app/shared/shared.module';
import { MailboxComposeComponent } from 'app/modules/admin/dashboards/mailbox/compose/compose.component';
import { MailboxDetailsComponent } from 'app/modules/admin/dashboards/mailbox/details/details.component';
import { MailboxListComponent } from 'app/modules/admin/dashboards/mailbox/list/list.component';
import { MailboxComponent } from 'app/modules/admin/dashboards/mailbox/mailbox.component';
import { mailboxRoutes } from 'app/modules/admin/dashboards/mailbox/mailbox.routing';
import { MailboxSettingsComponent } from 'app/modules/admin/dashboards/mailbox/settings/settings.component';
import { MailboxSidebarComponent } from 'app/modules/admin/dashboards/mailbox/sidebar/sidebar.component';
import { AncodeNavigationModule } from '@ancode/components/navigation';
import { AncodeScrollResetModule } from '@ancode/directives/scroll-reset';
import { AncodeScrollbarModule } from '@ancode/directives/scrollbar';
import { AncodeFindByKeyPipeModule } from '@ancode/pipes/find-by-key';

@NgModule({
    declarations: [
        MailboxComponent,
        MailboxComposeComponent,
        MailboxDetailsComponent,
        MailboxListComponent,
        MailboxSettingsComponent,
        MailboxSidebarComponent
    ],
    imports     : [
        RouterModule.forChild(mailboxRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        QuillModule.forRoot(),
        AncodeFindByKeyPipeModule,
        AncodeNavigationModule,
        AncodeScrollbarModule,
        AncodeScrollResetModule,
        SharedModule
    ]
})
export class MailboxModule
{
}
