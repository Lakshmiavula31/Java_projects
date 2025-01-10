import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  divs:{title: string; content: string; imageUrl: string; cost: string }[]=[];
  constructor(){
    this.generateDivs();
  }
  generateDivs(){
    for(let i=0;i<=this.gridItems.length-1;i++){
      this.divs.push(this.gridItems[i]);
    }
  }
  gridItems=[
    {imageUrl:'assets/images/grapes.jpg',title:'Grapes',cost:'3.74$/kg',content:''},
    {imageUrl:'assets/images/Oranges.jpg',title:'Oranges',cost:'6.23$/kg',content:''},
    {imageUrl:'assets/images/carrots.jpg',title:'Carrots',cost:'1.2$/kg',content:''},
    {imageUrl:'assets/images/chichory.jpg',title:'Chichory',cost:'2.68$/kg',content:''},
    {imageUrl:'assets/images/green-pepper.jpeg',title:'Green-pepper',cost:'2.22$/kg',content:''},
    {imageUrl:'assets/images/yellow-pepper.jpeg',title:'Yellow-pepper',cost:'2.23$/kg',content:''},
    {imageUrl:'assets/images/leeks.jpeg',title:'Leeks',cost:'1.89$/kg',content:''},
    {imageUrl:'assets/images/lemons.jpg',title:'Lemons',cost:'1.05$/kg',content:''},
    {imageUrl:'assets/images/onions.jpg',title:'Onions',cost:'3.45$/kg',content:''},
    {imageUrl:'assets/images/orange-red.jpeg',title:'Red Oranges',cost:'4.74$/kg',content:''},
    {imageUrl:'assets/images/peach.jpeg',title:'Peach',cost:'3.98$/kg',content:''},
    {imageUrl:'assets/images/pears.jpg',title:'Pears',cost:'4.03$/kg',content:''},
    {imageUrl:'assets/images/jonagold-apple.jpeg',title:'JonaGold Apple',cost:'5.25$/kg',content:''},
    {imageUrl:'assets/images/smith-apple.jpeg',title:'Smith Apple',cost:'2.54$/kg',content:''},
    {imageUrl:'assets/images/golden-apple.jpeg',title:'Golden Apple',cost:'6.04$/kg',content:''},
    {imageUrl:'assets/images/potatos.jpeg',title:'Potatos',cost:'2.54$/kg',content:''},
    {imageUrl:'assets/images/red-pepper.jpeg',title:'Red pepper',cost:'2.67$/kg',content:''},
    {imageUrl:'assets/images/pomegranate.jpeg',title:'Pomegranate',cost:'4.03$/kg',content:''},
    {imageUrl:'assets/images/strawberry.jpeg',title:'Strawberry',cost:'5.67$/kg',content:''},
    {imageUrl:'assets/images/banana.jpeg',title:'Banana',cost:'3.09$/kg',content:''},
    {imageUrl:'assets/images/jamun.jpeg',title:'Jamun',cost:'2.32$/kg',content:''},
    {imageUrl:'assets/images/cherry.jpeg',title:'Cherry',cost:'4.95$/kg',content:''},
    {imageUrl:'assets/images/beetroot.jpeg',title:'Beetroot',cost:'2.65$/kg',content:''},
    {imageUrl:'assets/images/corn.jpeg',title:'Sweet Corn',cost:'4.95$/kg',content:''},

  ]

}
