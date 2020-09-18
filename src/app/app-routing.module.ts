import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import {ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: './pages/pages.module#PagesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
