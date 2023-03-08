// library imports: 
import { configureStore } from '@reduxjs/toolkit';

// my element imports:
import feedReducer from "../pages/Feed/feedSlice.js";
import postSliceReducer from "../pages/Post/postSlice.js";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    post: postSliceReducer,
  },
});
