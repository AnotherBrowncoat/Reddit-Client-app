// library imports:
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

// my elements imports:
import { getFeed,
    getChildren,
    isLoadingFeed,
    failedLoadingFeed } from "./feedSlice.js";
import { FeedCard } from "../../components/feedCard/feedCard.js";

// styling imports:
import "./Feed.css";


export const Feed = () => {
    const dispatch = useDispatch();
    // selectors:
    const children = useSelector(getChildren);
    const feedLoading = useSelector(isLoadingFeed);
    const feedLoadingFailed = useSelector(failedLoadingFeed);
    // used parameters:
    const { subReddit } = useParams();

    useEffect(() => {
        // returns the viewer to the top of the new page:
        window.scrollTo(0, 0);
        dispatch(getFeed(subReddit));
    // dependency array; will only execute if dispatch or subreddit change:
    }, [dispatch, subReddit]);

    if(feedLoading) {
        return <p>Loading</p>;
    };

    if(feedLoadingFailed) {
        return <p>Failed</p>
    };
    
    // valid subreddits will have a "children" property containing their posts and comments etc:
    if(children !== undefined) {
        return (
            <div className="feed">
                <h1>Loaded</h1>
                {children.map((post, index) => (
                    <FeedCard data={post.data} key={index} />
                ))};
            </div>
        )    
    };
};

export default Feed;

/* 

                

*/