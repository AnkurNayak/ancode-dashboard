import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SettingsComponent } from 'app/modules/admin/dashboards/settings/settings.component';
import { SettingsAccountComponent } from 'app/modules/admin/dashboards/settings/account/account.component';
import { SettingsSecurityComponent } from 'app/modules/admin/dashboards/settings/security/security.component';
import { SettingsNotificationsComponent } from 'app/modules/admin/dashboards/settings/notifications/notifications.component';
import { SettingsTeamComponent } from 'app/modules/admin/dashboards/settings/team/team.component';
import { settingsRoutes } from 'app/modules/admin/dashboards/settings/settings.routing';
import { SharedModule } from 'app/shared/shared.module';
import { AncodeAlertModule } from '@ancode/components/alert';

@NgModule({
    declarations: [
        SettingsComponent,
        SettingsAccountComponent,
        SettingsSecurityComponent,
        SettingsNotificationsComponent,
        SettingsTeamComponent
    ],
    imports     : [
        RouterModule.forChild(settingsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        AncodeAlertModule,
        SharedModule
    ]
})
export class SettingsModule
{
}
