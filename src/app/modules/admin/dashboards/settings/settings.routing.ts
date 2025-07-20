import { Route } from '@angular/router';
import { SettingsComponent } from 'app/modules/admin/dashboards/settings/settings.component';

export const settingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent
    }
];
