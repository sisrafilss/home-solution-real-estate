import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userInfo: {},
  loading: null,
  error: ''
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
    }
  },
});

export const { setUser, setLoading, setAuthError } = user.actions;
export default user.reducer;
