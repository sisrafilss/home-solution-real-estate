import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  saleFlats: [],
  topSaleFlats: [],
  flatDetail: {},
  loading: false,
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
    singleFlatDetailRequested: (state, action) => {
      state.loading = true;
    },
    setSingleFlatDetail: (state, action) => {
      state.flatDetail = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setSalesFlats,
  setTopSalesFlats,
  setSingleFlatDetail,
  singleFlatDetailRequested,
} = flatSale.actions;
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
    url: "/top-sale-flats",
    onSuccess: setTopSalesFlats.type,
  });

//   Get Single Flat Detail
export const loadSingleFlatDetail = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    onStart: singleFlatDetailRequested.type,
    onSuccess: setSingleFlatDetail.type,
  });
