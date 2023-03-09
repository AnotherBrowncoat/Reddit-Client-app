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
import { PostComment } from "../../components/postComment/postComment.js";

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
            <div className="postWrapper">
                
                {/* post content: */}
                <div className="postBody">
                    <h2>Hello indeed</h2>
                    <PostBody data={postBody.children[0].data} />
                </div>

                {/* comments on this post: */}
                <div className="commentSection">
                    <p>This is the comments section</p>
                    {userComments.children.map((comment, index) => (
                        <PostComment 
                            data={comment.data} key={index} 
                        />
                    ))}  
                </div>      
            </div>
        )
    }

}

export default Post;