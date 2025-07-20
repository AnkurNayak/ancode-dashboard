import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AncodeScrollbarModule } from '@ancode/directives/scrollbar';
import { AncodeNavigationAsideItemComponent } from '@ancode/components/navigation/classy/components/aside/aside.component';
import { AncodeNavigationBasicItemComponent } from '@ancode/components/navigation/classy/components/basic/basic.component';
import { AncodeNavigationCollapsableItemComponent } from '@ancode/components/navigation/classy/components/collapsable/collapsable.component';
import { AncodeNavigationDividerItemComponent } from '@ancode/components/navigation/classy/components/divider/divider.component';
import { AncodeNavigationComponent } from '@ancode/components/navigation/classy/classy.component';
import { AncodeNavigationSpacerItemComponent } from '@ancode/components/navigation/classy/components/spacer/spacer.component';
import { AncodeNavigationGroupItemComponent } from '@ancode/components/navigation/classy/components/group/group.component';

@NgModule({
    declarations : [
        AncodeNavigationAsideItemComponent,
        AncodeNavigationBasicItemComponent,
        AncodeNavigationCollapsableItemComponent,
        AncodeNavigationDividerItemComponent,
        AncodeNavigationComponent,
        AncodeNavigationSpacerItemComponent,
        AncodeNavigationGroupItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        AncodeScrollbarModule
    ],
    exports : [AncodeNavigationComponent]
})

export class AncodeNavigationModule{}