import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Paper1Component } from './paper1/paper1.component';
import { HttpClientModule } from '@angular/common/http';
import{ReactiveFormsModule} from'@angular/forms';
import{MatListModule}from'@angular/material/list';
import{MatRadioModule} from'@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    Paper1Component,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    MatRadioModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
