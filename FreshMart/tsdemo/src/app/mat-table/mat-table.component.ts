import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrl: './mat-table.component.scss'
})
export class MatTableComponent {

  tableColumns : string[] =  ['name','dob','address'];

  students : Student[] = [
    {name:'lakshmi',dob:'31-01-1997',address:'mtm'},
    {name:'sai',dob:'20-06-1995',address:'hyd'},
    {name:'nirmala',dob:'22-12-1993',address:'vij'},
    {name:'aarush',dob:'27-05-2020',address:'hyd'},
  ];

}
interface Student{
  name:string;
  dob:string;
  address:string;
}

