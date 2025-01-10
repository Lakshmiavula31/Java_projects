import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';




const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'enrollments',component:EnrollmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
