import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = [];

export const getUserList = createAsyncThunk("GET_USER_LIST", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const userData = [];
  for (const user of response.data) {
    const temp = {
      key: user.id,
      name: user.name,
      nickname: user.username,
      age: user.phone,
    };
    userData.push(temp);
  }
  return userData;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [getUserList.fulfilled]: (state, { payload }) => [...payload],
  },
});

console.log(userSlice);

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
