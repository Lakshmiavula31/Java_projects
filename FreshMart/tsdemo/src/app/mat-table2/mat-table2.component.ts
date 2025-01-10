import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-table2',
  templateUrl: './mat-table2.component.html',
  styleUrl: './mat-table2.component.scss'
})
export class MatTable2Component {

  productColumns : string[]=['id','name','category','price','stock']

  products : Product[]=[
    {id:1,name:'Laptop',category:'Electonic',price:40000,stock:5},
    {id:2,name:'Mobile',category:'Electonic',price:20000,stock:25},
    {id:3,name:'Notebook',category:'Stationery',price:100,stock:50},
    {id:4,name:'Chair',category:'Furniture',price:500,stock:20},
    {id:5,name:'Bluetooth',category:'Electonic',price:1200,stock:5},
    {id:6,name:'Bottle',category:'Plastic',price:100,stock:10},
    {id:7,name:'Pens',category:'Stationery',price:20,stock:100},
    {id:8,name:'Table',category:'Furniture',price:500,stock:20},
    {id:9,name:'Watch',category:'Electonic',price:15000,stock:30},
    {id:10,name:'Sofas',category:'Furniture',price:30000,stock:5},
  ];
  

}
interface Product{
  id:number;
  name:string;
  category:string;
  price:number;
  stock:number;
}
