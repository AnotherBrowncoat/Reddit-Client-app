// library imports:
import React from "react";
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// my elements imports:



// styling imports:
import './postBody.css'


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
                        <p>Posted in <strong>{body.data.subreddit_name_prefixed}</strong> by {`u\\${body.data.author}`} on {postedWhen}</p>
                    </div>
                </Link>

                <Link to={body.data.permalink}>
                    {/* Post title, with NSFW tag if flagged as such: */}
                    <div className="postHeading">
                        <h3>
                            {body.data.title}{body.data.thumbnail === "nsfw" ? <span className="nsfw">nsfw</span> : ""}
                        </h3>
                        <p>{body.data.num_comments} Comments</p>
                    </div>

                    {/* if post is a link, it should render the link: */}
                    {body.data.post_hint === "link" ?
                        <p className="postLink">
                            <a href={body.data.url} target="blank">
                                {body.data.url}
                            </a>
                        </p>
                    : ""}
                    
                    {/* Post score: */}
                    <div className="postScore">
                        <p>Score: {body.data.score}</p>        
                    </div>
                </Link>  
            </article>

        </div>
    )

};