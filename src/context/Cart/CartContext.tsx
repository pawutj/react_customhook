import React, {
  createContext,
  Reducer,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
} from "react";
import { ICart, IProducts } from "../../types/productsType";
import cartReducer from "./cartReducer";

const initialState: ICart = {
  totalPrice: 0,
  products: [],
};

const CartContext = createContext<any>(initialState);

interface IProps {
  children: ReactNode;
}

const CartContextProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispath] = useReducer<Reducer<ICart, any>>(
    cartReducer,
    initialState
  );

  const addToCart = (productData: IProducts, quantity: number = 1): void => {
    const { products } = state;
    if (products.find((p) => p.id === productData.id)) {
      const product = products.find((p) => p.id === productData.id);
      product!.quantity += quantity;
      const newState = products.filter((p) => p.id !== productData.id);
      dispath({ type: "ADD_TO_CART", payload: [...newState, product] });
    } else {
      dispath({ type: "ADD_TO_CART", payload: [...products, productData] });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.products,
        totalPrice: state.totalPrice,
        addToCart,
        dispath,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

interface IReducer {
  cart: IProducts[];
  totalPrice: number;
  dispath: ({ type, payload }: { type: string; payload: any }) => void;
  addToCart: (productData: IProducts[], quantity: number) => void;
}

const useCartContext = (): IReducer => useContext(CartContext);

export default CartContext;
export { CartContextProvider, useCartContext };
