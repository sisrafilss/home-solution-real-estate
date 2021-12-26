import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (user, action) => {
      const { email, displayName, photoURL } = action.payload;
      user.displayName = displayName;
      user.email = email;
      user.photoURL = photoURL;
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
