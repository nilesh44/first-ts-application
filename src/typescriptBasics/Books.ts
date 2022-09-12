interface Book {
  titel: string;
  author: string;
  price: number;
  manufacturar?: string;

  mrpPrice: (price: number, discount: number) => number;
}

export {};
