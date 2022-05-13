import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from "./components/logo/logo.component";
import {OverviewToolbarComponent} from "./components/overview-toolbar/overview-toolbar.component";
import {OverviewComponent} from "./pages/overview/overview.component";
import {OverviewRoutingModule} from "./overview-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {TagChipsModule} from "../../ui/tag-chips/tag-chips.module";

@NgModule({
  declarations: [
    LogoComponent,
    OverviewComponent,
    OverviewToolbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatToolbarModule,
    MatSelectModule,
    MatStepperModule,

    OverviewRoutingModule,
    TagChipsModule,
  ]
})
export class OverviewModule {
}
