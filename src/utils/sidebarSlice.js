import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    setToggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setToggleSidebar } = SidebarSlice.actions;

export default SidebarSlice.reducer;
