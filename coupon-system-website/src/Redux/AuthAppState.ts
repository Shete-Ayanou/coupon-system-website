import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ClientType, LoginResModel } from "../Models/Login";

// Function to load user data from local storage
const loadUserFromLocalStorage = () => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : { email: "", token: "", clientType: ClientType.LOGGED_OUT, id: -2 };
  };
  
  interface AuthState {
    user: LoginResModel;
  }
  
  // Initialize user data by calling loadUserFromLocalStorage
  const initialState: AuthState = {
    user: loadUserFromLocalStorage(),
  };
  
  export enum ActionType {
    USER_LOGGED_IN = "USER_LOGGED_IN",
    USER_LOGGED_OUT = "USER_LOGGED_OUT",
  }
  
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      userLoggedIn(state, action: PayloadAction<LoginResModel>) {
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload)); // Save user data to local storage
      },
      userLoggedOut(state) {
        state.user = { email: "", token: "", clientType: ClientType.LOGGED_OUT, id: -2 };
        localStorage.removeItem("user"); // Remove user data from local storage
      },
    },
  });
  
  export const { userLoggedIn, userLoggedOut } = authSlice.actions;
  export const authReducer = authSlice.reducer;
  