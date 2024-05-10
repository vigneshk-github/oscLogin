import { createSlice, configureStore } from "@reduxjs/toolkit";

const intialAuthState = {
  isAuthenticate: false,
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  checkbox4: false,
  email_id: '',
};

const authSlice = createSlice({
  name: "authentication",
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticate = true;
    },
    loginEmail(state, action) {
      state.email_id = action.payload;
    },
    logout(state) {
      state.isAuthenticate = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
