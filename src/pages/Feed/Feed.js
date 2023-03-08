// library imports:
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

// my functions imports:
import { getFeed,
    getChildren,
    isLoadingFeed,
    failedLoadingFeed } from "./feedSlice.js";

// my components imports:
import { FeedCard } from "../../components/feedCard/feedCard.js";

// my pages imports:
// import { Loading } from "../Loading/Loading.js";
// import { LoadingError } from "../FailedLoading/FailedLoading.js";

// styling imports:
import "./Feed.css";


export const Feed = () => {
    const dispatch = useDispatch();
    // selectors:
    const children = useSelector(getChildren);
    const feedLoading = useSelector(isLoadingFeed);
    const feedLoadingFailed = useSelector(failedLoadingFeed);
    // uses this part of the URL path (as defined by the <Feed /> Route path) when used in functions:
    const { subreddit } = useParams();

    useEffect(() => {
        // returns the viewer to the top of the new page:
        window.scrollTo(0, 0);
        // loads the feed of the current subreddit, as defined by the <Feed /> Route path:
        dispatch(getFeed(subreddit));
    // dependency array; will only execute if dispatch or subreddit change:
    }, [dispatch, subreddit]);

    if(feedLoading) {
        return <p>Loading placeholder</p>;
        // return <Loading />;
    };

    if(feedLoadingFailed) {
        return <p>LoadingError placeholder</p>
        // return <LoadingError />;
    };

    // valid subreddits will have a "children" property containing their posts and comments etc:
    if(children !== undefined) {
        return (
            <div className="feed">
                
                {/* displays the name of the currently selected subreddit, or the default of Popular if none */}
                <h2>{subreddit ? `Subreddit: ${subreddit}` : "Popular"}</h2>

                {/* creates a FeedCard element for each post with a unique index */}
                {children.map((post, index) => (
                    <FeedCard data={post.data} key={index} />
                ))};
            
            </div>
        )    
    };
};

export default Feed;