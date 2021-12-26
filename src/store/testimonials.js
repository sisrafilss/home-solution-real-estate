import { apiCallBegan } from "./api";

const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "testimonials",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    testimonialsRequested: (testimonials, action) => {
      testimonials.loading = true;
    },
    testimonialsRequestedFailed: (testimonials, action) => {
      testimonials.loading = false;
    },
    testimonialsReceived: (testimonials, action) => {
      testimonials.list = action.payload;
      testimonials.loading = false;
    },
  },
});

export const {
  testimonialsRequested,
  testimonialsRequestedFailed,
  testimonialsReceived,
} = slice.actions;

export default slice.reducer;

// Action Creator
const url = "/testimonials";

// Getting Testimonials
export const loadTestimonials = () =>
  apiCallBegan({
    url,
    onStart: testimonialsRequested.type,
    onSuccess: testimonialsReceived.type,
    onFaoniled: testimonialsRequestedFailed.type,
  });

// Selectors
