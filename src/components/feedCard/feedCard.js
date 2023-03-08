// // library imports:
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// my elements imports:
import logo from "../../logo.svg";

// styling imports:
import "./feedCard.css"; 


export const FeedCard = (post, key) => {
    let postThumbnail = post.data.thumbnail;
    if (!postThumbnail.includes("https")) {
        postThumbnail = logo;
    }

    // post itself: 
    return (
        <div className="feedCard" key={key}>
            <article>
                <Link to={"/r/" + post.data.subreddit}>
                    <div className="postOrigin">
                        <p>Posted in {post.data.subreddit_name_prefixed} by {post.data.author} at "time"</p>
                    </div>
                </Link>

                <div className="postHeading">
                    <h3>{post.data.title}</h3>
                    <p>{post.data.num_comments} Comments</p>
                </div>

                <div className="postThumbnail">
                    <img className="thumbnailImage" src={postThumbnail} />
                </div>
                
                <div className="postScore">
                    <p>Score: {post.data.score}</p>        
                </div>                
            </article>
        </div>
    );
};

export default FeedCard;


/* 

    // date and time of post:
    const dataCreated = new Date(post.data.created_utc*1000);
    const postedWhen = dataCreated.toLocaleString(
        "en=GB",
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




            

*/