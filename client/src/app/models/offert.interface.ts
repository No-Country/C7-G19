import { ISticker } from './sticker.interface';
import { IUser } from './user.interface';

export interface IOffert {
  id: number;
  title: string;
  selled: boolean;
  description: string;
  price: number;
  product: ISticker;
  user: IUser;
  sell: boolean;
  exchange: boolean;
  created_at: Date;
}
