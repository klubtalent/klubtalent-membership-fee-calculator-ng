import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* List of available routes */
const routes: Routes = [
    {path: 'overview', loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule)},
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
