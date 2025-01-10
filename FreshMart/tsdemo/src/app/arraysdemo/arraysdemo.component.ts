import { Component } from '@angular/core';

@Component({
  selector: 'app-arraysdemo',
  templateUrl: './arraysdemo.component.html',
  styleUrl: './arraysdemo.component.scss'
})
export class ArraysdemoComponent {
  students : Student[]= [
    {name:'lakshmi',dob:'31-01-1997',address:'mtm'},
    {name:'sai',dob:'20-06-1995',address:'mtm'},
    {name:'nirmala',dob:'22-12-1993',address:'mtm'},
    {name:'aarush',dob:'27-05-2020',address:'mtm'},

  ];

}
interface Student{
  name:string;
  dob:string;
  address:string;
}

