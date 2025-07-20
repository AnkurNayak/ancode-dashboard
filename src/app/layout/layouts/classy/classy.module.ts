import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'app/shared/shared.module';
import { ClassyLayoutComponent } from 'app/layout/layouts/classy/classy.component';
import { AncodeNavigationModule } from '@ancode/components/navigation';
import { UserModule } from 'app/layout/common/user/user.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { MessagesModule } from "app/layout/common/messages/messages.module";
import { AncodeLoadingBarModule } from '@ancode/components/loading-bar/loading-bar.module';
import { AncodeFullscreenModule } from '@ancode/components/fullscreen';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';

@NgModule({
    declarations: [
        ClassyLayoutComponent
    ],
    exports: [
        ClassyLayoutComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        AncodeFullscreenModule,
        AncodeLoadingBarModule,
        AncodeNavigationModule,
        LanguagesModule,
        MessagesModule,
        NotificationsModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule

    ]
})
export class ClassyLayoutModule
{
}