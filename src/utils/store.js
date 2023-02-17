import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import SidebarSlice from "./sidebarSlice";
import videoDescriptionSlice from "./videoDescriptionSlice";

export const store = configureStore({
  reducer: {
    toggle: SidebarSlice,
    videoDetails: videoDescriptionSlice,
    cache: searchSlice,
  },
});
