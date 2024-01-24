import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IPrices {
  minPrice: number;
  maxPrice: number;
}

const initialState: IPrices = {
  minPrice: 0,
  maxPrice: 1000,
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPrices: (state, action: PayloadAction<IPrices>) => {
      return action.payload;
    },
  },
});

export const { setPrices } = priceSlice.actions;

export default priceSlice.reducer;
