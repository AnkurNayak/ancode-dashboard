import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { appRoutes } from 'app/app.routing';
import { AncodeModule } from '@ancode';
import { AncodeConfigModule } from '@ancode/services/config';
import { LayoutModule } from 'app/layout/layout.module';
import { CoreModule } from 'app/core/core.module';
import { AncodeMockApiModule } from '@ancode/lib/mock-api';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';


const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    //Ancode Modules
    AncodeModule,
    AncodeConfigModule.forRoot(appConfig),
    AncodeMockApiModule.forRoot(mockApiServices),
    //layout
    LayoutModule,
    //core
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
