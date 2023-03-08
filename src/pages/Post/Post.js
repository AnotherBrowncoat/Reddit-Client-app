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

// my components imports:
import { PostBody } from "../../components/postBody.js/postBody.js";

// styling imports: 
import './Post.css';


export const Post = () => {
    const dispatch = useDispatch();
    // selectors:
    const postBody = useSelector(getPostBody);
    const userComments = useSelector(getComments);
    const postLoading = useSelector(isLoadingPost);
    const postLoadingFailed = useSelector(failedLoadingPost);
    // useParams:
    const { subreddit, id, postLink } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getPost({
            subreddit: subreddit,
            id: id,
            postLink: postLink
        }));
    }, [dispatch, subreddit, id, postLink]);


    if(postLoading) {
        return <p>Loading</p>;
        // return <Loading />;
    };

    if(postLoadingFailed) {
        return <p>Failed</p>
        // return <LoadingError />
    };

    if(postBody !== undefined) {
        return (
            <div className="post">
                <h2>Hello indeed</h2>
                <PostBody data={postBody.children[0].data} />
            </div>
        )
    }

}

export default Post;