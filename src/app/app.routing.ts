import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
export const appRoutes: Route[] = [
  // Redirect empty path to '/dashboards/home'
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/home' },

  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'dashboards/home',
  },

  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'confirmation-required',
        loadChildren: () =>
          import(
            '../app/modules/auth/confirmation-required/confirmation-required.module'
          ).then((m) => m.AuthConfirmationRequiredModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import(
            '../app/modules/auth/forgot-password/forgot-password.module'
          ).then((m) => m.AuthForgotPasswordModule),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import(
            '../app/modules/auth/reset-password/reset-password.module'
          ).then((m) => m.AuthResetPasswordModule),
      },
      {
        path: 'sign-in',
        loadChildren: () =>
          import('../app/modules/auth/sign-in/sign-in.module').then(
            (m) => m.AuthSignInModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('../app/modules/auth/sign-up/sign-up.module').then(
            (m) => m.AuthSignUpModule
          ),
      },
    ],
  },

  // Auth routes for authenticated users
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'sign-out',
        loadChildren: () =>
          import('../app/modules/auth/sign-out/sign-out.module').then(
            (m) => m.AuthSignOutModule
          ),
      },
      {
        path: 'unlock-session',
        loadChildren: () =>
          import(
            '../app/modules/auth/unlock-session/unlock-session.module'
          ).then((m) => m.AuthUnlockSessionModule),
      },
    ],
  },

  // Landing routes
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../app/modules/landing/home/home.module').then(
            (m) => m.LandingHomeModule
          ),
      },
    ],
  },

  // Landing routes
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      {
        path: 'dashboards',
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('../app/modules/admin/dashboards/home/home.module').then(
                (m) => m.HomeModule
              ),
          },
          {
            path: 'tasks',
            loadChildren: () =>
              import('../app/modules/admin/dashboards/tasks/tasks.module').then(
                (m) => m.TasksModule
              ),
          },
          {
            path: 'notes',
            loadChildren: () =>
              import('../app/modules/admin/dashboards/notes/notes.module').then(
                (m) => m.NotesModule
              ),
          },
          {
            path: 'file-manager',
            loadChildren: () =>
              import(
                '../app/modules/admin/dashboards/file-manager/file-manager.module'
              ).then((m) => m.FileManagerModule),
          },
          {
            path: 'mailbox',
            loadChildren: () =>
              import(
                '../app/modules/admin/dashboards/mailbox/mailbox.module'
              ).then((m) => m.MailboxModule),
          },
          {
            path: 'analytics',
            loadChildren: () =>
              import(
                '../app/modules/admin/dashboards/analytics/analytics.module'
              ).then((m) => m.AnalyticsModule),
          },
          {
            path: 'settings',
            loadChildren: () =>
              import(
                '../app/modules/admin/dashboards/settings/settings.module'
              ).then((m) => m.SettingsModule),
          },
          {
            path: 'posts',
            loadChildren: () =>
              import('../app/modules/admin/dashboards/posts/posts.module').then(
                (m) => m.PostsModule
              ),
          },
          {
            path: 'help-center',
            loadChildren: () =>
              import(
                '../app/modules/admin/dashboards/help-center/help-center.module'
              ).then((m) => m.HelpCenterModule),
          },
        ],
      },
    ],
  },
];
