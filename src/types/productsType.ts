interface IProducts {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ICart {
  totalPrice: number;
  products: IProducts[];
}

export type { ICart, IProducts };
