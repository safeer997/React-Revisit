import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //name of the slice
  initialState: { counterValue: 0 },
  reducers: {
    increment: (state, action) => {
      state.counterValue = state.counterValue + 1;
    },
    decrement: (state, action) => {
      state.counterValue--;
    },
    add_input: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state, action) => {
      console.log("toggle privacy");
      return  state = !state
     
    },
  },
});

const my_store = configureStore({
  reducer: {
    //myslices will go here
    counter: counterSlice.reducer,
    privac: privacySlice.reducer,
  },
});

export const sliceActions = counterSlice.actions;
export const privacySliceActions = privacySlice.actions;
export default my_store;
