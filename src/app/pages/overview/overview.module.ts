import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from "./components/logo/logo.component";
import {OverviewToolbarComponent} from "./components/overview-toolbar/overview-toolbar.component";
import {OverviewComponent} from "./pages/overview/overview.component";
import {OverviewRoutingModule} from "./overview-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    LogoComponent,
    OverviewComponent,
    OverviewToolbarComponent,
  ],
  imports: [
    CommonModule,

    MatToolbarModule,

    OverviewRoutingModule
  ]
})
export class OverviewModule {
}
