import { Injectable } from '@angular/core';
import { IOffert } from '../../../models/offert.interface';

@Injectable({
  providedIn: 'root',
})
export class OffertsService {
  dummyOfferts: IOffert[] = [
    {
      id: 1,
      title: 'Venta de sticker',
      selled: false,
      description: 'Vendo este sticker de la selección de Senegal',
      price: 10,
      product: {
        id: 1,
        name: 'Alfred',
        surname: 'Gomis',
        img: 'https://firebasestorage.googleapis.com/v0/b/qatar2022-6f059.appspot.com/o/Alfred%20Gomis.png?alt=media&token=9a07ac4a-3927-4f5c-9c3e-61b8ae13c028',
        team: 'Senegal',
      },
      user: {
        id: 1,
        name: 'Alpha',
        password: '123',
        email: 'correo1@correo.com',
      },
      sell: true,
      exchange: false,
      created_at: new Date(),
    },
    {
      id: 2,
      title: 'Intercambio',
      selled: false,
      description: 'Intercambio este sticker de la selección de Senegal',
      price: 0,
      product: {
        id: 2,
        name: 'Bamba',
        surname: 'Dieng',
        img: 'https://firebasestorage.googleapis.com/v0/b/qatar2022-6f059.appspot.com/o/Bamba%20Dieng.png?alt=media&token=656660c4-797a-4f4a-b0e5-6a997c2a991a',
        team: 'Senegal',
      },
      user: {
        id: 2,
        name: 'Bravo',
        password: '123',
        email: 'correo2@correo.com',
      },

      sell: false,
      exchange: true,
      created_at: new Date(),
    },
  ];

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

  getOffertById(id: number): any {
    return this.dummyOfferts.find((offert) => offert.id === id);
  }
}
