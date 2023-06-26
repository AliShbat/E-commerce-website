import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};


export const baszaarSlice = createSlice({
  name: "bazaar",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const items = state.productData.find((item) => {
        return item._id === action.payload._id;
      });
      if (items) {
        items.quntity += action.payload.quntity;
      } else {
        state.productData.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      state.productData = state.productData.filter((item) => {
        return item._id !== action.payload;
      });
    },
    resetCart: (state) => {
      state.productData = [];
    },
    incrementquntity: (state, action) => {
      const items = state.productData.find((item) => {
        return item._id === action.payload._id;
      });
      if (items) {
        items.quntity++;
      }
    },
    decrementquntity: (state, action) => {
      const items = state.productData.find((item) => {
        return item._id === action.payload._id;
      });
      if (items.quntity === 1) {
        items.quntity = 1;
      } else {
        items.quntity--;
      }
    },
  },
});
export const {
  addToCard,
  removeCart,
  resetCart,
  incrementquntity,
  decrementquntity,
} = baszaarSlice.actions;
export default baszaarSlice.reducer;
