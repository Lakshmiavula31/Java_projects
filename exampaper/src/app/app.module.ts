import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { AnswerPageComponent } from './answer-page/answer-page.component';
import{MatListModule} from '@angular/material/list';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    QuestionPageComponent,
    AnswerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
