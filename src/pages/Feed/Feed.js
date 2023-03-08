// library imports:
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

// my elements imports:
import { getFeed,
    getChildren,
    isLoadingFeed,
    failedLoadingFeed } from "./feedSlice.js";

// styling imports:
import "./Feed.css";


export const Feed = () => {
    const dispatch = useDispatch();
    const children = useSelector(getChildren);
    const feedLoading = useSelector(isLoadingFeed);
    const feedLoadingFailed = useSelector(failedLoadingFeed);
    const { subReddit } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getFeed(subReddit));
    }, [dispatch, subReddit]);

    if(feedLoading) {
        return <p>Loading</p>;
    };

    if(feedLoadingFailed) {
        return <p>Failed</p>
    };

    if(children !== undefined) {
        return (
            <div className="feed">
                <h1>Howdy</h1>
                
            </div>
        );    
    };
};

export default Feed;

// {children.map((post, index) => )}