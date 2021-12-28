import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  orders: [],
};

const adminDashboard = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setApproveOrder: (state, action) => {
      if (action.payload.modifiedCount > 0) {
        const index = state.orders.findIndex(
          (order) => order._id === action.payload._id
        );
        state.orders[index].status = "Shipped";
      }
    },
    setDeleteOrder: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.orders.findIndex(
          (order) => order._id === action.payload._id
        );
        state.orders.splice(index, 1);
      }
    },
    setAddSaleFlat: (state, action) => {
      if (action.payload.insertedId) {
        alert("Flat info successfully Saved!");
      }
    },
    setAddRentFlat: (state, action) => {
      if (action.payload.insertedId) {
        alert("Flat info successfully Saved!");
      }
    },
    setMakeAnAdmin: (state, action) => {
      if (action.payload.modifiedCount > 0) {
        console.log(action.payload);
        alert("User role set as Admin!");
      } else {
        alert("This user is already in Admin List!");
      }
    },
  },
});

export const {
  setOrders,
  setApproveOrder,
  setDeleteOrder,
  setAddSaleFlat,
  setAddRentFlat,
  setMakeAnAdmin
} = adminDashboard.actions;
export default adminDashboard.reducer;

// Action Creator
const url = "/orders";
// Get Orders
export const loadOrders = () =>
  apiCallBegan({
    url,
    onSuccess: setOrders.type,
  });

// Approve Order
export const approveOrder = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "put",
    onSuccess: setApproveOrder.type,
  });

//   Delete Order
export const deleteOrder = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "delete",
    onSuccess: setDeleteOrder.type,
  });

// Add a sale flat
export const addSaleFlat = (data) =>
  apiCallBegan({
    url: "/add-sale-flat",
    method: "post",
    data,
    onSuccess: setAddSaleFlat.type,
  });

// Add a Rent flat
export const addRentFlat = (data) =>
  apiCallBegan({
    url: "/add-rent-flat",
    method: "post",
    data,
    onSuccess: setAddRentFlat.type,
  });

// Make an Admin
export const makeAnAdmin = (email) =>
  apiCallBegan({
    url: `/make-admin/${email}`,
    method: "put",
    onSuccess: setMakeAnAdmin.type,
  });
