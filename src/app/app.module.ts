import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogoComponent} from './pages/overview/components/logo/logo.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {UiModule} from "./core/ui/ui.module";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,

    UiModule,

    MatToolbarModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
