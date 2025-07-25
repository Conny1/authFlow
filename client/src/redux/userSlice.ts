import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      first_name: "",
      last_name: "",
      email: "",
      token: "",
      _id: "",
    },
  },
  reducers: {
    updateUserData: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = {
        first_name: "",
        last_name: "",
        email: "",
        token: "",
        _id: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserData, logout } = userSlice.actions;

export default userSlice.reducer;
