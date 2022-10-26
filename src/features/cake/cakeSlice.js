import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  numOfCakes: 10,
};

// Generate Actions and Reducers
const cakeSlice = createSlice({
  name: "cake",
  initialState,
//   Perform direct state mutations
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer
export const {ordered, restocked}= cakeSlice.actions