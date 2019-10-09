import {Direction, PriceUnit} from './post.enums';

export interface EstateLocation {
  readonly city: string;
  readonly province: string;
  readonly ward: string;
  readonly address: string;
}

export interface Price {
  readonly amount: number;
  readonly unit?: PriceUnit;
}

export interface EstateProperties {
  readonly width: number; // Chieu rong
  readonly length: number; // Chieu dai
  readonly area: number; // Dien tich
  readonly price: Price;
  readonly project: string; // Du an
  readonly direction: Direction; // Huong
  readonly roadWidth: number; // Lo gioi (chieu rong mat duong)
  readonly juridical: string; // Phap ly
}

export interface Post {
  readonly _id: string;
  readonly title: string;
  readonly postCategory: string; // Loai tin (Ban | Cho Thue)
  readonly estateCategory: string; // Loai BDS (Nha | Dat;...)
  readonly estateLocation: EstateLocation; // Vi tri BDS
  readonly estateProperties: EstateProperties; // Cac thuoc tinh cua BDS
  readonly moreInfo: string;
  readonly images: string[];
}
