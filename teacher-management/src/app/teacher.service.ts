import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl='http://localhost:9999/api/teachers';

  constructor(private http: HttpClient) { }

  getTeachers():Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiUrl);
  }
  addTeacher(teacher:Teacher):Observable<Teacher>{
    return this.http.post<Teacher>(this.apiUrl,teacher)
  }

}


export interface Teacher{
  id:number;
  name:string;
  subject:string;
  experience:number;
}
