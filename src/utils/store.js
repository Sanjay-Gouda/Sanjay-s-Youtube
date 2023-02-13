import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./sidebarSlice";
import videoDescriptionSlice from "./videoDescriptionSlice";

export const store = configureStore({
  reducer: {
    toggle: SidebarSlice,
    videoDetails: videoDescriptionSlice,
  },
});
