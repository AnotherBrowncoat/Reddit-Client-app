// // library imports:
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// my elements imports:


// styling imports:
import "./feedCard.css";

export const FeedCard = (post, key) => {


    // post itself: 
    return (
        <div className="feedCard" key={key}>
            
            <h3>{post.data.title}</h3>
            <p>{post.data.num_comments} Comments</p>
            <div className="postScore">
                <p>Score: {post.data.score}</p>        
            </div> 


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




            <article>
                <p>Posted in {post.data.subreddit_name_prefixed} by {post.data.author} at {postedWhen}</p>

                
            </article>

*/