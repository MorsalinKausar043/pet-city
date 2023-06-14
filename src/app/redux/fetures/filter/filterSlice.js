const { createSlice } = require("@reduxjs/toolkit");
import { initialState } from "./initialState";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { setModal } = filterSlice.actions;
export default filterSlice.reducer;
