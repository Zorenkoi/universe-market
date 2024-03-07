import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import themeSlice from "./slices/themeSlice";
import priceSlice from "./slices/priceSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    cart: cartReducer,
    prices: priceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
