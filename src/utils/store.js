import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    toggle: SidebarSlice,
  },
});
