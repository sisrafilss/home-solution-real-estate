import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  myOrders: [],
};

const userDashboard = createSlice({
  name: "userDashboard",
  initialState,
  reducers: {
    setMyOrders: (state, action) => {
      state.myOrders = action.payload;
    },
    deleteOrder: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.myOrders.findIndex(
          (order) => order._id === action.payload.deletedId
        );
        state.myOrders.splice(index, 1);
      }
    },
  },
});

export const { setMyOrders, deleteOrder } = userDashboard.actions;
export default userDashboard.reducer;

// Action Creator
const url = "/my-orders";

// Get current user orders
export const loadMyOrders = (email) =>
  apiCallBegan({
    url: `${url}?email=${email}`,
    onSuccess: setMyOrders.type,
  });

export const cancellAnOrder = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "delete",
    onSuccess: deleteOrder.type,
  });
