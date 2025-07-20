import { Route } from '@angular/router';
import { HelpCenterFaqsComponent } from 'app/modules/admin/dashboards/help-center/faqs/faqs.component';
import { HelpCenterGuidesCategoryComponent } from 'app/modules/admin/dashboards/help-center/guides/category/category.component';
import { HelpCenterGuidesGuideComponent } from 'app/modules/admin/dashboards/help-center/guides/guide/guide.component';
import { HelpCenterGuidesComponent } from 'app/modules/admin/dashboards/help-center/guides/guides.component';
import { HelpCenterComponent } from 'app/modules/admin/dashboards/help-center/help-center.component';
import { HelpCenterMostAskedFaqsResolver, HelpCenterFaqsResolver, HelpCenterGuidesResolver, HelpCenterGuidesCategoryResolver, HelpCenterGuidesGuideResolver } from 'app/modules/admin/dashboards/help-center/help-center.resolvers';
import { HelpCenterSupportComponent } from 'app/modules/admin/dashboards/help-center/support/support.component';

export const helpCenterRoutes: Route[] = [
    {
        path     : '',
        component: HelpCenterComponent,
        resolve  : {
            faqs: HelpCenterMostAskedFaqsResolver
        }
    },
    {
        path     : 'faqs',
        component: HelpCenterFaqsComponent,
        resolve  : {
            faqs: HelpCenterFaqsResolver
        }
    },
    {
        path    : 'guides',
        children: [
            {
                path     : '',
                component: HelpCenterGuidesComponent,
                resolve  : {
                    guides: HelpCenterGuidesResolver
                }
            },
            {
                path    : ':categorySlug',
                children: [
                    {
                        path     : '',
                        component: HelpCenterGuidesCategoryComponent,
                        resolve  : {
                            guides: HelpCenterGuidesCategoryResolver
                        }
                    },
                    {
                        path     : ':guideSlug',
                        component: HelpCenterGuidesGuideComponent,
                        resolve  : {
                            guide: HelpCenterGuidesGuideResolver
                        }
                    }
                ]
            }
        ]
    },
    {
        path     : 'support',
        component: HelpCenterSupportComponent
    }
];
