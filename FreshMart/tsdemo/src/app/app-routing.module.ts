import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStudentsComponent } from './get-students/get-students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { GetEmployeesComponent } from './get-employees/get-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path:'students',component: GetStudentsComponent},
  {path:'add',component:CreateStudentComponent},
  {path:'edit/:id',component:CreateStudentComponent},
  {path:'employees',component:GetEmployeesComponent},
  {path:'addemployee',component:CreateEmployeeComponent},
  {path:'editemployee/:id',component:CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
