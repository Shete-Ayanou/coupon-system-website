import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GuardState {
  isAdmin: boolean;
}

const initialState: GuardState = {
  isAdmin: false,
};

export enum ActionType {
  LOGGED_IN_AS_ADMIN = "LOGGED_IN_AS_ADMIN",
  CLEAR_DATA = "CLEAR_DATA",
}

const guardSlice = createSlice({
  name: "guard",
  initialState,
  reducers: {
    loggedInAsAdmin(state) {
      state.isAdmin = true;
    },
    removeAdminAccess(state) {
      state.isAdmin = initialState.isAdmin;
    },
  },
});

export const { loggedInAsAdmin, removeAdminAccess } = guardSlice.actions;

export const guardReducer = guardSlice.reducer;
