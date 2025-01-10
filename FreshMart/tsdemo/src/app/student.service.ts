import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './models/Student';



@Injectable({
  providedIn: 'root'
})

export class StudentService {


  constructor(private http: HttpClient){}
  private apiUrl='http://localhost:9999/api/students';

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentById(id:number): Observable<Student>{
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }
  createStudent(student:Student): Observable<Student>{
    return this.http.post<Student>(this.apiUrl,student);
  }
  updateStudent(id:number,student:Student): Observable<Student>{
    return this.http.put<Student>(`${this.apiUrl}/${id}`,student);
  }
  deleteStudent(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}

