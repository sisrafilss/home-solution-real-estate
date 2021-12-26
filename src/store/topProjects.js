import { apiCallBegan } from "./api";

const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "topProjects",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    topProjectsRequested: (topProjects, action) => {
      topProjects.loading = true;
    },
    topProjectsRequestedFailed: (topProjects, action) => {
      topProjects.loading = false;
    },
    topProjectsReceived: (topProjects, action) => {
      topProjects.list = action.payload;
      topProjects.loading = false;
    },
  },
});

export const {
  topProjectsReceived,
  topProjectsRequested,
  topProjectsRequestedFailed,
} = slice.actions;

export default slice.reducer;

// Action Creator
const url = "/top-projects";

// Getting top projects
export const loadTopProjects = () =>
  apiCallBegan({
    url,
    onStart: topProjectsRequested.type,
    onSuccess: topProjectsReceived.type,
    onFailed: topProjectsRequestedFailed.type
  });

// Selectors
