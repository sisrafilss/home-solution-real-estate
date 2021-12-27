import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  saleFlats: [],
  topSaleFlats: []
};

const flatSale = createSlice({
  name: "salesFlats",
  initialState,
  reducers: {
    setSalesFlats: (state, action) => {
      state.saleFlats = action.payload;
    },
    setTopSalesFlats: (state, action) => {
        state.topSaleFlats = action.payload;
      },
  },
});

export const { setSalesFlats, setTopSalesFlats } = flatSale.actions;
export default flatSale.reducer;

// Action
const url = "/sale-flats";
// Get Sale Flats
export const loadFlats = () =>
  apiCallBegan({
    url,
    onSuccess: setSalesFlats.type,
  });

//   Get Top Sale Flats
export const loadTopFlats = () =>
  apiCallBegan({
    url: '/top-sale-flats',
    onSuccess: setTopSalesFlats.type,
  });


