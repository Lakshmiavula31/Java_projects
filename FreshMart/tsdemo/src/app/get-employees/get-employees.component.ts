import { Component } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrl: './get-employees.component.scss'
})
export class GetEmployeesComponent {

  employees:Employee[]=[];
  displayColumns:string[]=['id','name','dob','email','salary', 'address','actions'];

  constructor(private employeeService: EmployeeService,private router:Router){}

  ngOnInit():void{
    this.loadEmployees();
  }
  loadEmployees():void{
    this.employeeService.getAllEmployees().subscribe(data =>{
      this.employees=data;
    });
  }

  onDelete(id:number):void{
    if(confirm('Are you sure you want to delete this employee?')){
      this.employeeService.deleteEmployee(id).subscribe(()=>{
        this.loadEmployees();
      });
    }
  }

  onEdit(id:number):void{
    this.router.navigate(['/editemployee',id]);
  }
  onAdd():void{
    this.router.navigate(['/addemployee']);
  }

}

