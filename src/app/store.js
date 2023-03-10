// library imports: 
import { configureStore } from '@reduxjs/toolkit';

// my element imports:
import feedReducer from "../pages/Feed/feedSlice.js";
import postSliceReducer from "../pages/Post/postSlice.js";
import searchSliceReducer from "../pages/Search/searchSlice.js"
import subRedditSliceReducer from '../features/subReddits/subRedditSlice.js';

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    post: postSliceReducer,
    search: searchSliceReducer,
    subreddit: subRedditSliceReducer
  },
});
