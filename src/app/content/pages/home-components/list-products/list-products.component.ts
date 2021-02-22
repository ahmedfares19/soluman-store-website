import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('animateCard', [
      state('show' , style({
        opacity:1
      })),
      state('hide' , style({
        opacity:0,
        color:'#fff'
      })),
      transition('show => hide',animate('600ms ease-out')),
      transition('hide => show',animate('600ms ease-out'))
    ])
  ]
})
export class ListProductsComponent implements OnInit {
  toppings = new FormControl();

  public animate = false;
  get getStateName(){
    return this.animate? 'show':'hide'
  }
  show(){
    this.animate = !this.animate;
    console.log("show");
  }
  
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor() { }

  ngOnInit(): void {
  }

}
