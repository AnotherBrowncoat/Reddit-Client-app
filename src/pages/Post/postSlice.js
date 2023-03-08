// library imports:
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// my elements imports:


// styling imports: 

export const getPost = createAsyncThunk(
    'post/getPost',
    async (params) => {
        const response = await fetch(
            // this is the URL structure of a reddit post when clicked on to view the post/comments:
            `https://www.reddit.com/r/${params.subreddit}/comments/${params.id}/${params.postLink}.json`);
        const json = await response.json();
        return json;
    },
);

export const postSlice = createSlice({
    name: "post",
    initialState: {
        post: {},
        isLoadingPost: false,
        failedLoadingPost: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPost.pending, (state) => {
            state.isLoadingPost = true;
            state.failedLoadingPost = false;
        })
        .addCase(getPost.rejected, (state) => {
            state.isLoadingPost = false;
            state.failedLoadingPost = true;
        })
        
        .addCase(getPost.fulfilled, (state, action) => {
            state.isLoadingPost = false;
            state.failedLoadingPost = false;
            // when fulfilled, we need to be served the post itself and the comments chain below:
            state.post.postBody = action.payload.postBody;
            state.post.comments = action.payload.comments;
        })
    }
});

export const getComments = state => state.post.post.comments;
export const getPostBody = state => state.post.postBody;
export const isLoadingPost = state => state.post.isLoadingPost;
export const failedLoadingPost = state => state.post.failedLoadingPost;