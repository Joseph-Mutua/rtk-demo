import { createSlice } from "@reduxjs/toolkit";
const { cakeActions } = require("../cake/cakeSlice");

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
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numOfIcecreams--;
    });
  },
});

// Export reducer as default export
export default icecreamSlice.reducer;

// Export actions as named exports
module.exports.icecreamActions = icecreamSlice.actions;
