import { Component } from '@angular/core';
import { Teacher, TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-add',
  standalone: true,
  imports: [],
  templateUrl: './teacher-add.component.html',
  styleUrl: './teacher-add.component.scss'
})
export class TeacherAddComponent {
  teacher:Teacher={
    id:0,
    name:'',
    subject:'',
    experience:0,
  };

  constructor(private teacherService: TeacherService){}

  addTeacher():void{
    if(this.teacher.name&&this.teacher.subject){
      this.teacherService.addTeacher(this.teacher).subscribe(()=>{
        alert('Teacher added successfully');
        this.teacher={id:0,name:'',subject:'',experience:0};
      });
    }
  }

}
