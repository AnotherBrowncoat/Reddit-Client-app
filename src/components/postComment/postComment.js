// library imports:
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// my elements imports:


// styling imports:
import './postComment.css'
import { CgArrowsV } from "react-icons/cg";



export const PostComment = (comment, index) => {
    
    // getting the age of a comment:
    const timeSincePosted = () => {
        const timeNow = Date.now()/1000;
        const timeWhenPosted = new Date(comment.data.created_utc);
        return Math.floor((timeNow - timeWhenPosted)/3600);
    };

    // rendering the comment:
    return (
        <div className={"comments"} key={index} id={index}>

            {/* comment header; score, author (and check if Original Poster), time since posted: */}
            <p className="commentHeader">
                <strong>u/{comment.data.author}</strong>{comment.data.is_submitter ? <strong id="isOP">(OP)</strong> : ""}
                - <CgArrowsV className="scoreIcon"/>{comment.data.score} point{comment.data.score !== 1 ? "s" : ""} - posted {timeSincePosted()}hr ago
            </p>

            {/* comments are outputted in markdown, so we need to convert them: */}
            <ReactMarkdown 
                children={comment.data.body}
                remarkPlugins={[remarkGfm]}
            />

            {/* if there are replies send to new PostComment */}
            {comment.data.replies !== '' && comment.data.replies !== undefined?
                comment.data.replies.data.children.map((comment, index) => (
                    // comments have the 'kind' 'listing', 'more' does not have the same layout
                    comment.kind !== 'more'?
                        <PostComment 
                            data={comment.data} 
                            key={index} 
                            /> 
                        :''
                    ))
                : ''
            }          
        </div>
    )
};



/*  const timeSincePosted = () => {
        const timeNow = Date.now()/1000;
        const timeWhenPosted = new Date(comment.data.created_utc);
        return Math.floor((timeNow - timeWhenPosted)/3600);
    };

*/