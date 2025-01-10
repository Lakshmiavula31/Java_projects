import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent {
  employeeForm: FormGroup;
  employee : Employee | null= null;
  isEditMode: boolean=false;

  constructor(
    private fb: FormBuilder,
    private employeeService:EmployeeService,
    private route:ActivatedRoute,
    private router:Router
  ){
    this.employeeForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      dob:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      salary:['',[Validators.required,Validators.maxLength(7)]],
      address:['',[Validators.required,Validators.maxLength(17)]]
    });
  }

  ngOnInit():void{
    const employeeId=this.route.snapshot.paramMap.get('id');
    if(employeeId){
      this.isEditMode=true;
      this.employeeService.getEmployeeById(Number(employeeId)).subscribe(employee=>{
        this.employee=employee;
        this.employeeForm.patchValue(employee);
      });

      }
    }

    onSubmit():void{
      if(this.employeeForm.invalid){
        return;
      }
      const employeeData: Employee = this.employeeForm.value;
      console.log("-------EEEEEEEMMMM name------"+employeeData.name);
      if(this.isEditMode && this.employee){
        this.employeeService.updateEmployee(this.employee.id,employeeData).subscribe(()=>{
          this.router.navigate(['/employees']);
        });
      }else{
        this.employeeService.createEmployee(employeeData).subscribe(()=>{
          this.router.navigate(['/employees']);
        });
      }

    }
    onCancel():void{
      this.router.navigate(['/employees']);
    }

  }


