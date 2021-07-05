import { Product } from "../../shared/interfaces";
export interface Categories {
  id: number;
  title: string;
  products: Product[];
}