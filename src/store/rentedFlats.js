import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  topRentedFlats: [],
  rentedFlats: [],
  flatDetail: {}
};

const rentedFlats = createSlice({
  name: "rentedFlats",
  initialState,
  reducers: {
    setTopRentedFlats: (state, action) => {
      state.topRentedFlats = action.payload;
    },
    setRentedFlats: (state, action) => {
      state.rentedFlats = action.payload;
    },
    singleFlatDetail: (state, action) => {
      state.flatDetail = action.payload
    }
  },
});

export const { setTopRentedFlats, setRentedFlats, singleFlatDetail } = rentedFlats.actions;
export default rentedFlats.reducer;

// Action Creator
const url = "/top-rented-flats";
export const loadTopRentedFlats = () =>
  apiCallBegan({
    url,
    onSuccess: setTopRentedFlats.type,
  });

export const loadRentedFlats = () =>
  apiCallBegan({
    url: '/rented-flats',
    onSuccess: setRentedFlats.type,
  });

export const loadSingleRentFlat = (id) => apiCallBegan({
  url: `/rented-flats/${id}`,
  onSuccess: singleFlatDetail.type
})
