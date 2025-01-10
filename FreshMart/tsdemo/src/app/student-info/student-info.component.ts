import { Component } from '@angular/core';
//import { Student } from '../observable-demo/observable-demo.component';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss'
})
export class StudentInfoComponent {
  displayColumns:string[]=['id','name','email'];   //columns to display
  students:Student[]=[];
  apiUrl:string='http://localhost:9999/api/students';
  constructor(private http:HttpClient){}

  ngOnInit():void{
    this.fetchStudents();
  }
  fetchStudents():void{
    this.http.get<Student[]>(this.apiUrl).subscribe(
      (data)=>{
        this.students=data;
      },
      (error)=>{
        console.error('error fetching student data:',error)
      }
    );
  }


}

export interface Student{
  id:number;
  name:string;
  email:string;
}
