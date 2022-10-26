import { createSlice } from "@reduxjs/toolkit";
import {ordered as cakeOrdered} from "../cake/cakeSlice"

const initialState = {
  numOfIcecreams: 20,
};

// Generate Actions and Reducer
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // ADDING EXTRA REDUCERS

  // ->>METHOD 1
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecreams--
  //   }
  // }

  // ->>METHOD 2
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIcecreams--;
    });
  },
});

// Export reducer as default export
export default icecreamSlice.reducer;

// Export actions as named exports
export const { ordered, restocked } = icecreamSlice.actions;
