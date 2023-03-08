// // library imports:
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// my elements imports:
import logo from "../../logo.svg";

// styling imports:
import "./feedCard.css"; 


export const FeedCard = (post, key) => {
    // gets date and time of post, then converts it to a more readable form:
    const dataCreated = new Date(post.data.created_utc*1000);
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

    // uses the scraped thumbnail if available, or the reddit logo for posts without one set:
    let postThumbnail = post.data.thumbnail;
    if (!postThumbnail.includes("https")) {
        postThumbnail = logo;
    };

    // post preview itself: 
    return (
        <div className="feedCard" key={key}>
            
            <article>
                {/* Posted by/in details: */}
                <Link to={"/r/" + post.data.subreddit}>
                    <div className="postOrigin">
                        <p>Posted in <strong>{post.data.subreddit_name_prefixed}</strong> by {`u\\${post.data.author}`} on {postedWhen}</p>
                    </div>
                </Link>

                <Link to={post.data.permalink}>
                    {/* Post title, with NSFW tag if flagged as such: */}
                    <div className="postHeading">
                        <h3>
                            {post.data.title}{post.data.thumbnail === "nsfw" ? <span className="nsfw">nsfw</span> : ""}
                        </h3>
                        <p>{post.data.num_comments} Comments</p>
                    </div>

                    {/* Post thumbnail: */}
                    <div className="postThumbnail">
                        <img className="thumbnailImage" src={postThumbnail} alt="Post Thumbnail"/>
                    </div>

                    {/* if post is a link, it should render the link: */}
                    {post.data.post_hint === "link" ?
                        <p className="postLink">
                            <a href={post.data.url} target="blank">
                                {post.data.url}
                            </a>
                        </p>
                    : ""}
                    
                    {/* Post score: */}
                    <div className="postScore">
                        <p>Score: {post.data.score}</p>        
                    </div>
                </Link>                
            </article>
        </div>
    );
};

export default FeedCard;


/* 

    



            

*/