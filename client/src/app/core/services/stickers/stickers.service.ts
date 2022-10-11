import { Injectable } from '@angular/core';
import { ISticker } from 'src/app/models/sticker.interface';

@Injectable({
  providedIn: 'root',
})
export class StickersService {
  dummyStickers: ISticker[] = [
    {
      id: 1,
      name: 'Alfred',
      surname: 'Gomis',
      img: 'https://firebasestorage.googleapis.com/v0/b/qatar2022-6f059.appspot.com/o/Alfred%20Gomis.png?alt=media&token=9a07ac4a-3927-4f5c-9c3e-61b8ae13c028',
      team: 'Senegal',
    },
    {
      id: 2,
      name: 'Bamba',
      surname: 'Dieng',
      img: 'https://firebasestorage.googleapis.com/v0/b/qatar2022-6f059.appspot.com/o/Bamba%20Dieng.png?alt=media&token=656660c4-797a-4f4a-b0e5-6a997c2a991a',
      team: 'Senegal',
    },
    {
      id: 3,
      name: 'Boulaye',
      surname: 'Dia',
      img: 'https://firebasestorage.googleapis.com/v0/b/qatar2022-6f059.appspot.com/o/Boulaye%20Dia.png?alt=media&token=5428a0da-b92e-4ed7-a115-c2532b8e614f',
      team: 'Senegal',
    },
  ];

  getStickers(): ISticker[] {
    return this.dummyStickers;
  }

  searchStickers(searchTerm: string): ISticker[] {
    return this.dummyStickers.filter((sticker) => {
      return (
        sticker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sticker.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sticker.team.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }

  constructor() {}
}
