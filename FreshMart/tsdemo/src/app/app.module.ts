import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ArraysdemoComponent } from './arraysdemo/arraysdemo.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import{MatTableModule} from'@angular/material/table';
import { MatTable2Component } from './mat-table2/mat-table2.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { Response } from 'express';
import { StudentInfoComponent } from './student-info/student-info.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { GetStudentsComponent } from './get-students/get-students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import{MatInputModule} from'@angular/material/input';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { GetEmployeesComponent } from './get-employees/get-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    ArraysdemoComponent,
    MatTableComponent,
    MatTable2Component,
    ObservableDemoComponent,
    StudentInfoComponent,
    CreateStudentComponent,
    GetStudentsComponent,
    CreateEmployeeComponent,
    GetEmployeesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

    
  
  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
