import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  docs: [],
};
const docSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {
    addDoc: {
      reducer: (state, action) => {
        const doc = {
          id: nanoid(),
          text: action.payload.text,
          desc: action.payload.desc,
        };
        state.docs.push({ ...doc });
      },
    },
    removeDoc: (state, action) => {
      const index = state.docs.findIndex((prev) => prev.id === action.payload);
      if (index !== -1) {
        state.docs.splice(index, 1);
      }
    },
  },
});

export const { addDoc, removeDoc } = docSlice.actions;

export default docSlice.reducer;
