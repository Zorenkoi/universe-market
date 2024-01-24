import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "@/interfaces/interfaces";

interface CartState {
  isCartOpen: boolean;
  list: {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
  }[];
}

const initialState: CartState = {
  isCartOpen: false,
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingProduct = state.list.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const existingProduct = state.list.find(
        (product) => product.id === action.payload
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.list = state.list.filter(
          (product) => product.id !== action.payload
        );
      }
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (product) => product.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.list = [];
    },

    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
  resetCart,
  closeCart,
  openCart,
} = cartSlice.actions;

export default cartSlice.reducer;
