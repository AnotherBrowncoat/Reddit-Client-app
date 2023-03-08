import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getFeed = createAsyncThunk(
    "feed/getFeed",
    async (subReddit="popular") => {
        const response = await fetch(
            `https://www.reddit.com/r/${subReddit}.json`
        );
        const json = await response.json();
        return json;
    }
);

export const feedSlice = createSlice({
    name: "feed",
    initialState: {
        feed: {},
        isLoadingFeed: false,
        failedLoadingFeed: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(getFeed.pending, (state) => {
            state.isLoadingFeed = true;
            state.failedLoadingFeed = false;
        })
        .addCase(getFeed.rejected, (state) => {
            state.isLoadingFeed = false;
            state.failedLoadingFeed = true;
        })
        .addCase(getFeed.fulfilled, (state, action) => {
            state.isLoadingFeed = false;
            state.failedLoadingFeed = false;
            state.feed = action.payload.data;
        })
    }
});

export const getChildren = state => state.feed.feed.children;
export const isLoadingFeed = state => state.feed.isLoadingFeed;
export const failedLoadingFeed = state => state.feed.failedLoadingFeed;

export default feedSlice.reducer;