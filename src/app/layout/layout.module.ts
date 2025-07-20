import { NgModule } from "@angular/core";
import { LayoutComponent } from "app/layout/layout.component";
import { SharedModule } from "app/shared/shared.module";
import { ClassyLayoutModule } from "app/layout/layouts/classy/classy.module";
import { SettingsModule } from "app/layout/common/settings/settings.module";
import { EmptyLayoutModule } from "app/layout/layouts/empty/empty.module";

@NgModule({
    declarations : [LayoutComponent],
    imports : [SharedModule, ClassyLayoutModule,SettingsModule, EmptyLayoutModule],
    exports : [LayoutComponent, ClassyLayoutModule, EmptyLayoutModule]
})

export class LayoutModule{}