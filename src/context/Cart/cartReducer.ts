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

interface IAction {
  type: string;
  payload: any;
}

const cartReducer = (state: ICart, action: IAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, products: action.payload };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter((i) => i.id !== action.payload),
      };

    case "INCRESE_COUNT":
      return {
        ...state,
        products: state.products.map((i) => {
          if (i.id === action.payload.id)
            return { ...i, quantity: i.quantity + 1 };
          return i;
        }),
      };
    case "DECRESE_COUNT":
      return {
        ...state,
        products: state.products.map((i) => {
          if (i.id === action.payload) {
            return { ...i, quantity: i.quantity - 1 };
          }
          return i;
        }),
      };
    case "SET_TOTAL_PRICE":
      return { ...state, totalPrice: action.payload };
    case "SET_CART":
      return { ...state, products: action.payload };
    case "CLEAR_CART":
      return { totalPrice: 0, products: [] };
    default:
      return state;
  }
};
export type { ICart, IProducts };
