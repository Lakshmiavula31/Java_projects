import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  divs:{title:string; content:string}[]=[];
  constructor(){
    this.generateDivs();
  }
  generateDivs(){
    for(let i=1; i<=20; i++){
      this.divs.push({
        title: `Div Title ${i}`,
        content: `content for div number ${i}`,
      })
    }
  }
  total =  1000;
  gst = 180;
  grandTotal=this.total+this.gst;

}
