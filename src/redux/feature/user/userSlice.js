import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GRADESBOT_BASE_URL, SPORTHUB_BASE_URL } from "../../api";
const initialState = {
  user: {},
  status: "idle",
  error: null
};

export const fetchCreateUser = createAsyncThunk(
  "user/fetchCreateUser",
  async ({ username, email, password, confirmPassword }) => {
    const body = JSON.stringify({
      username,
      email,
      password,
      confirmPassword
    });
    const response = await fetch(`${SPORTHUB_BASE_URL}register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
    const user = await response.json();
    console.log("response", user);
    return user;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        state.status = "failed";
        console.log("action", action?.error?.description);
        state.error = action?.error?.description;
      });
  }
});

// export reducer
export default userSlice.reducer;

// export selector
export const selectUser = (state) => state.user.user;
export const selectError = (state) => state.user.error;
export const selectUserStatus = (state) => state.user.status;
