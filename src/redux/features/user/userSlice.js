import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SportHub_Base_Url } from "../../api";

const initialState = {
  createUser: {},
  verifyEmail: {},
  login: {},
  status: "idle",
  error: null
};

// const BASE_URL = process.env.REACT_APP_SportHub_Base_Url;
// console.log("BASE_URL", BASE_URL);

// create fetch user
export const fetchCreateUser = createAsyncThunk(
  "user/fetchCreateUser",
  async ({ username, email, password, confirmPassword }) => {
    // convert javascript object to json
    const body = JSON.stringify({
      username,
      email,
      password,
      confirmPassword
    });
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body
      }
    );
    // convert json to javascript object
    const user = await response.json();
    return user;
  }
);
// verify-email
export const fetchVerifyEmail = createAsyncThunk(
  "user/fetchVerifyEmail",
  async ({ email, otp_code }) => {
    const body = JSON.stringify({
      email,
      otp_code
    });
    const response = await fetch(`${SportHub_Base_Url}verify-otp/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const apiResponse = await response.json();
    return apiResponse;
  }
);

// login
export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async ({ email, password }) => {
    const body = JSON.stringify({
      email,
      password
    });
    const response = await fetch(`${SportHub_Base_Url}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const apiResponse = await response.json();
    return apiResponse;
  }
);

// create reducer and action
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(fetchCreateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        // console.log("action.payload", action.payload);
        state.status = "success";
        state.createUser = action.payload;
      })
      .addCase(fetchCreateUser.rejected, (state) => {
        state.status = "failed";
      })
      // Verify
      .addCase(fetchVerifyEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVerifyEmail.fulfilled, (state, action) => {
        // console.log("action.payload", action.payload);
        state.status = "success";
        state.verifyEmail = action.payload;
      })
      .addCase(fetchVerifyEmail.rejected, (state) => {
        state.status = "failed";
      })
      // Login
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.status = "success";
        state.login = action.payload;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = "failed";
      });
  }
});

// export reducer
export default userSlice.reducer;

// export action
// export const {} = userSlice.actions;
// export selector
export const selectUser = (state) => state?.user?.createUser;
export const selectVerifyEmail = (state) => state?.user?.verifyEmail;
export const selectLogin = (state) => state?.user?.login;
export const selectStatus = (state) => state?.user?.status;
