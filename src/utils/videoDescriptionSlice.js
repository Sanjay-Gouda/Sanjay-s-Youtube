import { createSlice } from "@reduxjs/toolkit";

const VideoDetailSlice = createSlice({
  name: "videoDetails",
  initialState: {
    details: {},
  },
  reducers: {
    setVideoDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setVideoDetails } = VideoDetailSlice.actions;

export default VideoDetailSlice.reducer;
