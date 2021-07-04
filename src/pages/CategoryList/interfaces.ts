export interface Product {
  id: number;
  title: string;
  author: string;
  cover_path: string;
  format_type: 'audiobook' | 'ebook';
  publisher: string;
}

export interface Categories {
  id: number;
  title: string;
  products: Product[];
}