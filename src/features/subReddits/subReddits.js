// library imports:
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// my elements imports:
import { getSubreddits, selectSubreddits } from './subRedditSlice';

// styling imports:
import './subReddits.css';
import logo from "../../logo.svg";



export const SubReddits = () => {
    // when we click a subreddit, we want to append "r/{subreddit}" to our app url;
    // this makes it line up with the 'path' set out in App.js' routes;
    // which allows 'navigate' to take us there thanks to react-router:
    const navigate = useNavigate();
    const goToSubreddit = (e) => {
        navigate(`${e.target.innerHTML}`);
    };

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);

    useEffect(() => {
        dispatch(getSubreddits());
    }, [dispatch])

    return (
        <div className="subRedditsDiv">
            <ul className="subRedditsList">
                {
                    subreddits.slice(0, 10).map((subreddit) => (
                        <li key={subreddit.id}
                            className="subredditListItem">
                            <img className="subredditIcon" 
                                src={subreddit.icon_img ? subreddit.icon_img : logo}
                                alt={`${subreddit.display_name_prefixed}`} 
                            />
                            <p className="subredditName" onClick={goToSubreddit}>
                                {subreddit.display_name_prefixed}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default SubReddits;


/*

*/