import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { response } from 'express';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.scss'
})
export class ObservableDemoComponent {
  private apiUrl="http://localhost:9999/api/students";
  student:Student={name:'',email:''};

  constructor(private http: HttpClient){}
  createStudent(student: Student):Observable<Student>{
    return this.http.post<Student>(this.apiUrl, student);
  }

  OnSubmit():void{
    this.createStudent(this.student).subscribe(
      (response)=>{
        console.log('Student created successfully',response);
        alert('Student Created successfuly');
      },
      (error) => {
        console.error('There was an error!', error);
        alert('There was an error');
      }
    );
  }

}
export interface Student{
  name:string;
  email:string;
}