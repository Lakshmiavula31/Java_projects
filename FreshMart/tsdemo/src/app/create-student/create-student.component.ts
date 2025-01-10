import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  StudentService } from '../student.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Student } from '../models/Student';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent {
  studentForm :FormGroup ;
  student : Student | null =null;
  isEditMode : boolean = false;
  

  constructor(
    private fb:FormBuilder,
    private studentService: StudentService,
    private route : ActivatedRoute,
    private router : Router
  ){
    this.studentForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.isEditMode = true;
      this.studentService.getStudentById(Number(studentId)).subscribe(student => {
        this.student = student;
        this.studentForm.patchValue(student);
      });
    }
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      return;
    }
    const studentData: Student = this.studentForm.value;

    if (this.isEditMode && this.student) {
      this.studentService.updateStudent(this.student.id, studentData).subscribe(() => {
        this.router.navigate(['/students']);
      });
    } else {
      this.studentService.createStudent(studentData).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/students']);
  }



}
