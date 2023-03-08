// library imports:
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// my elements imports:
import { getPost, 
    getPostBody, 
    getComments, 
    isLoadingPost,  
    failedLoadingPost } from './postSlice';

// styling imports: 
import './Post.css';


export const Post = () => {
    const dispatch = useDispatch();
    const postBody = useSelector(getPostBody);
    const userComments = useSelector(getComments);
    const postLoading = useSelector(isLoadingPost);
    const postLoadingFailed = useSelector(failedLoadingPost);

    if(postLoading) {
        return <p>Loading</p>;
    };

    if(postLoadingFailed) {
        return <p>Failed</p>
    };

    return (
        <div>This is a post</div>
    )

}

export default Post;