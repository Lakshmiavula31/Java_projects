import { Component, OnInit } from '@angular/core';
import { Teacher, TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent implements OnInit{
  teachers: Teacher[]=[];

  constructor(private teacherService: TeacherService){}
  ngOnInit(): void {
    this.fetchTeachers();
  }
  fetchTeachers():void{
    this.teacherService.getTeachers().subscribe((data)=>{
      this.teachers=data;
    });
  }

}
