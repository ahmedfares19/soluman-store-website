import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  cart = [{
    itemName: "chair chair chair",
    price: 500,
    currency: 'EGP',
    quantity: 2,
    itemImg: './../../../../assets/images/photo-1505740420928-5e560c06d30e.jfif',
    pridcutDisc:"product",
    time:new Date()
  }, {
    itemName: "chair chair chair",
    price: 500,
    currency: 'EGP',
    quantity: 2,
    itemImg: './../../../../assets/images/photo-1586495777744-4413f21062fa.jfif',
    time:new Date()
  }]
  constructor() { }
  ngOnInit(): void {
  }

}
