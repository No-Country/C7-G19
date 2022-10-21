import { Injectable } from '@angular/core';
import { offerts } from 'src/app/db/offerts';
import { IOffert } from '../../../models/offert.interface';

@Injectable({
  providedIn: 'root',
})
export class OffertsService {
  dummyOfferts: IOffert[] = offerts;

  constructor() {}

  getOfferts(): IOffert[] {
    return this.dummyOfferts;
  }

  searchOfferts(searchTerm: string): IOffert[] {
    return this.dummyOfferts.filter((offert) => {
      return (
        offert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offert.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offert.product.surname
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        offert.product.team.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }

  getOffertById(id: any): IOffert {
    //si no se encuentra el id, devuelve 22
    return (
      this.dummyOfferts.find((offert) => offert.id == id) ||
      this.dummyOfferts[22]
    );
  }
}
