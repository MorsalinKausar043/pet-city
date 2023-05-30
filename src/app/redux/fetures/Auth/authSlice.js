import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Auth from "@/app/firebase/firebase.init";

// user signUp part
const signUpUser = createAsyncThunk(
  "Auth/signUpUser",
  async ({ email, password }) => {
    const result = await createUserWithEmailAndPassword(Auth, email, password);
    return result.user.email;
  }
);

// user signIn part
const signInUser = createAsyncThunk(
  "Auth/signInUser",
  async ({ email, password }) => {
    const result = await signInWithEmailAndPassword(Auth, email, password);
    return result.user.email;
  }
);

const authSlice = createSlice({
  name: Auth,
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", JSON.stringify(action.payload));
      state.isLoading = false;
    },
    logOutUser: (state) => {
      state.email = "";
    },
    toggleState: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // signUp part ----------->
      .addCase(signUpUser.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.email = action.payload;
        localStorage.setItem("email", JSON.stringify(action.payload));
        state.isError = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.email = "";
        state.isError = true;
        state.errorMassage = action.error.message;
      })
      // signIn part ----------------->
      .addCase(signInUser.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.email = action.payload;
        localStorage.setItem("email", JSON.stringify(action.payload));
        state.isError = false;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.email = "";
        state.isError = true;
        state.errorMassage = action.error.message;
      });
  },
});

export const { saveUser, logOutUser, toggleState } = authSlice.actions;
export default authSlice.reducer;
