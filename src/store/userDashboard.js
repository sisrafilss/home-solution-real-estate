import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  myOrders: [],
  reviewSubmited: false,
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
    reviewSubmited: (state, action) => {
      if (action.payload.insertedId) state.reviewSubmited = true;
    },
    setReviewSubmitedStatus: (state, action) => {
      state.reviewSubmited = action.payload.state;
    },
  },
});

export const {
  setMyOrders,
  deleteOrder,
  reviewSubmited,
  setReviewSubmitedStatus,
} = userDashboard.actions;
export default userDashboard.reducer;

// Action Creator
const url = "/my-orders";

// Get current user orders
export const loadMyOrders = (email) =>
  apiCallBegan({
    url: `${url}?email=${email}`,
    onSuccess: setMyOrders.type,
  });

//   Cancell an order
export const cancellAnOrder = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "delete",
    onSuccess: deleteOrder.type,
  });

// Review
export const savedReview = (data) =>
  apiCallBegan({
    url: "/reviews",
    method: "post",
    data,
    onSuccess: reviewSubmited.type,
  });
