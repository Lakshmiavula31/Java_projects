import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import{MatButtonModule}from'@angular/material/button';
import{MatSidenavModule}from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import{MatFormField,MatLabel} from '@angular/material/form-field';
import{MatInput}from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MenuComponent,
    DashboardComponent,
    EnrollmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
