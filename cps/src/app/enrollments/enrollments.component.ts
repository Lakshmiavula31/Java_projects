import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent {
  
 x:number=0;
 y:number=0;
 total:number=0;

 sum(){
  this.total = +this.x + +this.y;
}
multiplication(){
  this.total = +this.x * +this.y;
}
division(){
  this.total = +this.x / +this.y;
}
subtration(){
  this.total = +this.x - +this.y;
}

}
