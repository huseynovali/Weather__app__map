import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};

const location = createSlice({
  name: "Location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { addLocation } = location.actions;

export default location.reducer;
