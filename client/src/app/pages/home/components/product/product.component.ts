import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IOffert } from '../../../../models/offert.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() offert!: IOffert;

  @Output() AddToCartEvent = new EventEmitter();

  today = new Date();

  constructor() {
    // console.log('1.constructor');
  }

  addToCart(): void {
    // this.AddToCartEvent.emit(this.tshirt.id);
  }

  ngOnInit(): void {}
}
