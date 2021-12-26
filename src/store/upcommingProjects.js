import { apiCallBegan } from "./api";

const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "upcommingProjects",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    upcommingProjectsRequested: (upcommingProjects, action) => {
      upcommingProjects.loading = true;
    },
    upcommingProjectsRequestedFailed: (upcommingProjects, action) => {
      upcommingProjects.loading = false;
    },
    upcommingProjectsReceived: (upcommingProjects, action) => {
      upcommingProjects.list = action.payload;
      upcommingProjects.loading = false;
    },
  },
});

export const {
  upcommingProjectsRequested,
  upcommingProjectsRequestedFailed,
  upcommingProjectsReceived,
} = slice.actions;

export default slice.reducer;

// Action Creator
const url = "/upcomming-projects";

// Getting top projects
export const loadUpcommingProjects = () =>
  apiCallBegan({
    url,
    onStart: upcommingProjectsRequested.type,
    onSuccess: upcommingProjectsReceived.type,
    onFaoniled: upcommingProjectsRequestedFailed.type,
  });

// Selectors
