import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import themeSlice from "./slices/themeSlice";
import priceSlice from "./slices/priceSlice";

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);

  localStorage.setItem("reduxState", JSON.stringify(store.getState()));

  return result;
};

const preloadedState =
  JSON.parse(localStorage.getItem("reduxState")) ||
  {
    // theme: { isDarkTheme: true },
  };

const store = configureStore({
  reducer: {
    theme: themeSlice,
    cart: cartReducer,
    prices: priceSlice,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
