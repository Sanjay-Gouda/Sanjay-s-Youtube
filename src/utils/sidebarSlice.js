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
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { setToggleSidebar, closeSidebar } = SidebarSlice.actions;

export default SidebarSlice.reducer;
