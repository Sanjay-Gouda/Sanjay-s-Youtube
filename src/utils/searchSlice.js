import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    suggestionList: {},
  },
  reducers: {
    setSearchCache: (state, action) => {
      const payload = action.payload;

      // const objLength = Object.keys(state.suggestionList).length;
      // console.log("objLength", objLength);
      state.suggestionList = { ...state.suggestionList, ...payload };
    },
  },
});

export const { setSearchCache } = SearchSlice.actions;

export default SearchSlice.reducer;
