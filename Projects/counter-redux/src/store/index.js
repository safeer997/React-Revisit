import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define a slice for counter-related logic
const counterSlice = createSlice({
  name: "counter", // Name of the slice, used in actions and reducers
  initialState: { counterValue: 0 }, // Initial state for the counter slice
  reducers: {
    increment: (state, action) => {
      // Reducer to increment the counter value by 1
      state.counterValue = state.counterValue + 1;
    },
    decrement: (state, action) => {
      // Reducer to decrement the counter value by 1
      state.counterValue--;
    },
    add_input: (state, action) => {
      // Reducer to add a specified value to the counter
      state.counterValue += action.payload;
    },
  },
});

// Define a slice for privacy-related logic
const privacySlice = createSlice({
  name: "privacy", // Name of the slice, used in actions and reducers
  initialState: false, // Initial state for the privacy slice (false indicates privacy is off)
  reducers: {
    toggle: (state, action) => {
      // Reducer to toggle the privacy state

      return (state = !state); // Toggle the state between true and false
    },
  },
});

// Configure the store with the defined slices
const my_store = configureStore({
  reducer: {
    // Combine reducers from different slices
    counter: counterSlice.reducer, // Reducer for the counter slice
    privacy: privacySlice.reducer, // Reducer for the privacy slice
  },
});

// Export actions from the counter slice
export const sliceActions = counterSlice.actions;
// Export actions from the privacy slice
export const privacySliceActions = privacySlice.actions;
// Export the configured store as the default export
export default my_store;
