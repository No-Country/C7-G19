import { Component, OnInit } from '@angular/core';
import { IOffert } from '../../../../models/offert.interface';
import { OffertsService } from '../../../../core/services/offerts/offerts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private offertsService: OffertsService) {}

  ngOnInit(): void {
    this.getOfferts();
  }

  items: IOffert[] = [];

  // addItem() {
  //   this.items.push({
  //     name: 'nuevoItem',
  //     price: 100,
  //     description: 'This is a new item',
  //     canBuy: true,
  //     soldOut: false,
  //   });
  // }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  readEvent(id: number) {
    console.log('producto: ' + id);
  }

  getOfferts() {
    this.items = this.offertsService.getOfferts();
  }
}
