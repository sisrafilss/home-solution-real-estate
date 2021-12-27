import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  orderSavedToDbInfo: {},
  loading: false,
};

const orders = createSlice({
  name: "orders",
  initialState,
  reducers: {
    orderSaveRequested: (state, action) => {
      state.loading = true;
    },
    orderSaveToDb: (state, action) => {
      state.orderSavedToDbInfo = action.payload;
      state.loading = false;
      alert("Order Placed Successfully!");
    },
    clearOrderInfo: (state, action) => {
      state.orderSavedToDbInfo = {};
    },
  },
});

export const { orderSaveToDb, orderSaveRequested, clearOrderInfo } = orders.actions;
export default orders.reducer;

// Actions
const url = "/place-order";

export const saveOrderToDb = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
    onStart: orderSaveRequested.type,
    onSuccess: orderSaveToDb.type,
  });
