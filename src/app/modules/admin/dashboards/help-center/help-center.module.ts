import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AncodeAlertModule } from '@ancode/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { HelpCenterFaqsComponent } from 'app/modules/admin/dashboards/help-center/faqs/faqs.component';
import { HelpCenterGuidesCategoryComponent } from 'app/modules/admin/dashboards/help-center/guides/category/category.component';
import { HelpCenterGuidesGuideComponent } from 'app/modules/admin/dashboards/help-center/guides/guide/guide.component';
import { HelpCenterGuidesComponent } from 'app/modules/admin/dashboards/help-center/guides/guides.component';
import { HelpCenterComponent } from 'app/modules/admin/dashboards/help-center/help-center.component';
import { helpCenterRoutes } from 'app/modules/admin/dashboards/help-center/help-center.routing';
import { HelpCenterSupportComponent } from 'app/modules/admin/dashboards/help-center/support/support.component';

@NgModule({
    declarations: [
        HelpCenterComponent,
        HelpCenterFaqsComponent,
        HelpCenterGuidesComponent,
        HelpCenterGuidesCategoryComponent,
        HelpCenterGuidesGuideComponent,
        HelpCenterSupportComponent
    ],
    imports     : [
        RouterModule.forChild(helpCenterRoutes),
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AncodeAlertModule,
        SharedModule
    ]
})
export class HelpCenterModule
{
}
