import { Injectable } from '@angular/core';
import { stickers } from 'src/app/db/stickers';
import { ISticker } from 'src/app/models/sticker.interface';

@Injectable({
  providedIn: 'root',
})
export class StickersService {
  dummyStickers: ISticker[] = stickers;

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
