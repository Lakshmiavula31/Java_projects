import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../models/Student';

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrl: './get-students.component.scss'
})
export class GetStudentsComponent {
  students : Student[]=[];
  displayColumns: string[]=['id','name','email','actions'];

  constructor(private studentService: StudentService, private router : Router){}
  ngOnInit():void{
    this.loadStudents();
  }
  loadStudents():void{
    this.studentService.getAllStudents().subscribe(data=>{
      this.students=data;
    });
  }
  onDelete(id:number):void{
    if(confirm('Are you sure you want to delete this student?')){
      this.studentService.deleteStudent(id).subscribe(()=>{
        this.loadStudents();
      });
    }
  }

  onEdit(id:number):void{
    this.router.navigate(['/edit',id]);
  }

  onAdd():void{
    this.router.navigate(['/add']);
    
  }

}
