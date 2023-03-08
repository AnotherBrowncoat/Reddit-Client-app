// library imports:
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// my elements imports:
import { getPost, 
    // getHeader, 
    getComments, 
    isLoadingPost,  
    failedLoadingPost } from './postSlice';

// styling imports: 
import './Post.css';


export const Post = () => {
    const dispatch = useDispatch();
    const userComments = useSelector(getComments);
    const postLoading = useSelector(isLoadingPost);
    const postLoadingFailed = useSelector(failedLoadingPost);



}

export default Post;