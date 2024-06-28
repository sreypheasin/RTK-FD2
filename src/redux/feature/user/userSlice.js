import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GradesBot_Base_url, SportHub_Base_Url } from "../../api";

// initial state
const initialState = {
  user: {},
  status: "idle"
};

export const fetchCreateUser = createAsyncThunk(
  "user/fetchCreateUser",
  async ({ username, email, password, confirmPassword }) => {
    // convert to javascript object
    const body = JSON.stringify({
      username,
      email,
      password,
      confirmPassword
    });
    const response = await fetch(`${SportHub_Base_Url}register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const user = await response.json();
    console.log("User", user);
    return user;
  }
);

// create slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        state.status = "failed";
      });
  }
});

// export reducer
export default userSlice.reducer;

// export selector
export const selectUser = (state) => state.user.user;
