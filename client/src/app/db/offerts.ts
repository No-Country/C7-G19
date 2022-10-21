import { IOffert } from '../models/offert.interface';
import { stickers } from './stickers';
import { users } from './users';

export const offerts: IOffert[] = [
  {
    id: 1,
    title: 'Sticker de CR7',
    selled: false,
    description: 'Vendo este sticker de Cristiano Ronaldo, es original',
    price: 5200,
    product: stickers[0],
    user: users[0],
    sell: true,
    exchange: false,
    created_at: new Date(),
  },
  {
    id: 2,
    title: 'Intercambio por otro',
    selled: false,
    description: 'Intercambio este sticker por el de Messi',
    price: 0,
    product: stickers[1],
    user: users[1],
    sell: false,
    exchange: true,
    created_at: new Date(),
  },
  {
    id: 3,
    title: 'Sticker de Messi',
    selled: false,
    description: 'Vendo este sticker de Messi, es original',
    price: 15200,
    product: stickers[5],
    user: users[2],
    sell: true,
    exchange: false,
    created_at: new Date(),
  },
  {
    id: 4,
    title: 'Intercambio por otro',
    selled: false,
    description: 'Intercambio este sticker por el de CR7',
    price: 0,
    product: stickers[6],
    user: users[3],
    sell: false,
    exchange: true,
    created_at: new Date(),
  },
  {
    id: 5,
    title: 'Sticker de Neymar',
    selled: false,
    description: 'Vendo este sticker de Neymar, es original',
    price: 10200,
    product: stickers[9],
    user: users[0],
    sell: true,
    exchange: false,
    created_at: new Date(),
  },
  {
    id: 6,
    title: 'Sticker de CR7',
    selled: false,
    description: 'Vendo este sticker de Cristiano Ronaldo, es original',
    price: 5200,
    product: stickers[0],
    user: users[1],
    sell: true,
    exchange: false,
    created_at: new Date(),
  },
  {
    id: 7,
    title: 'Intercambio por otro',
    selled: false,
    description: 'Intercambio este sticker por el de Otamendi',
    price: 0,
    product: stickers[3],
    user: users[2],
    sell: false,
    exchange: true,
    created_at: new Date(),
  },
  {
    id: 8,
    title: 'Sticker de Reus',
    selled: false,
    description: 'Vendo este sticker de Reus, es original',
    price: 10200,
    product: stickers[8],
    user: users[3],
    sell: true,
    exchange: false,
    created_at: new Date(),
  },
  {
    id: 9,
    title: 'Intercambio por otro',
    selled: false,
    description: 'Intercambio este sticker por el de CR7',
    price: 0,
    product: stickers[10],
    user: users[0],
    sell: false,
    exchange: true,
    created_at: new Date(),
  },
  {
    id: 10,
    title: 'Lewandowski',
    selled: false,
    description: 'Vendo este sticker de Lewandowski, es original',
    price: 10200,
    product: stickers[11],
    user: users[1],
    sell: true,
    exchange: false,
    created_at: new Date(),
  },
  {
    id: 11,
    title: 'Intercambio por otro',
    selled: false,
    description: 'Intercambio este sticker por el de CR7',
    price: 0,
    product: stickers[12],
    user: users[2],
    sell: false,
    exchange: true,
    created_at: new Date(),
  },
  {
    id: 12,
    title: 'Sticker de Lo Celso',
    selled: false,
    description: 'Vendo este sticker de Lo Celso, es original',
    price: 10500,
    product: stickers[2],
    user: users[3],
    sell: true,
    exchange: false,
    created_at: new Date(),
  },
];