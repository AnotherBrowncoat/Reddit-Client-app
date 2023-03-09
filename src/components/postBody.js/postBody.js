// library imports:
import React from "react";
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// my elements imports:



// styling imports:
import './postBody.css'
import { FaCommentAlt } from "react-icons/fa";
import { CgArrowsV } from "react-icons/cg";


export const PostBody = (body) => {
    // date and time of post: 
    // gets date and time of post, then converts it to a more readable form:
    const dataCreated = new Date(body.data.created_utc*1000);
    const postedWhen = dataCreated.toLocaleString(
        "en-GB",
        {
            hour12: true,
            weekday: "short",
            month: "short",
            year: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        }
    );

    // post body content: 
    return (
        <div className="postBody" key={body.data.id}>

            <article>
            
                <p>this is the post body</p>

                {/* Posted by/in details: */}
                <Link to={"/r/" + body.data.subreddit}>
                    <div className="postOrigin">
                        <p>Posted in <strong>{body.data.subreddit_name_prefixed}</strong> by {`u/${body.data.author}`} on {postedWhen}</p>
                    </div>
                </Link>

                <Link to={body.data.permalink}>
                    {/* Post title, with NSFW tag if flagged as such: */}
                    <div className="postHeading">
                        <h3>
                            {body.data.title}{body.data.thumbnail === "nsfw" ? <span className="nsfw">nsfw</span> : ""}
                        </h3>
                        <FaCommentAlt /><p>{body.data.num_comments} Comments</p>
                    </div>

                    {/* if post is just text, it should render as text; if not, render nothing: */}
                    {body.data.selftext !== "" ?
                        <p className="markDownText">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {body.data.selftext}
                            </ReactMarkdown>
                        </p> : null }


                    {/* if post is a link, it should render the link; if not, render nothing: */}
                    {body.data.post_hint === "link" ?
                        <p className="postLink">
                            <a href={body.data.url} target="blank">
                                {body.data.url}
                            </a>
                        </p>
                    : null }

                    {/* if post is a video, it should be playable and have controls; if not, render nothing: */}
                    {body.data.is_video ?
                        <video className="postVideo" controls >
                            <source src={body.data.media.reddit_video.fallback_url} type={"video/mp4"}/>
                        </video> : null }
                    
                    
                    {/* if post is an image, it should be displayed; if not, render nothing: */}
                    {body.data.post_hint === "image" ? 
                        <img className="postImage" src={body.data.url} alt={body.data.title}/>
                    : null }


                    {/* Post score: */}
                    <div className="postScore">
                        <CgArrowsV /><p>Score: {body.data.score}</p>        
                    </div>
                </Link>  
            </article>

        </div>
    )
};