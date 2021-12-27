import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

let initialState = {
  userInfo: {},
  loading: null,
  error: "",
  apiResponse: {},
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setUser: (user, action) => {
      const { email, displayName, photoURL } = action.payload;
      user.userInfo.displayName = displayName;
      user.userInfo.email = email;
      user.userInfo.photoURL = photoURL;
    },
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    addUserToDB: (state, action) => {
      state.apiResponse = action.payload;
    },
  },
});

export const { setUser, setLoading, setAuthError, addUserToDB } = user.actions;
export default user.reducer;

// Action Creator
const url = "/users";

// Add new user to db for registration using email and password
export const saveUserToDB = (data) =>
  apiCallBegan({
    url,
    data,
    method: "post",
    onSuccess: addUserToDB.type,
  });

// Update (upsert) user info to db for Google Login
export const upsertUser = (data) =>
  apiCallBegan({
    url,
    data,
    method: "put",
    onSuccess: addUserToDB.type,
  });
