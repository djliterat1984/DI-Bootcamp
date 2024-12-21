import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 444,
  users: [],
  status: "",
};

export const delay2sec = createAsyncThunk("counter/delay", () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(20);
    }, 5000);
  });
});

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const reslut = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await reslut.json();
  return data;
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state) => {
      //   setTimeout(() => {
      state.count += 1;
      //   }, 2500);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(delay2sec.pending, (state, action) => {
        console.log("LOADING.....");
      })
      .addCase(delay2sec.fulfilled, (state, action) => {
        state.count += action.payload;
      })
      .addCase(delay2sec.rejected, (state, action) => {
        console.log("REJECTED");
      })
      .addCase(fetchUsers.pending, (state, action) => {
        console.log("loading...");
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      });
  },
});

export const { add } = counterSlice.actions;
export default counterSlice.reducer;
