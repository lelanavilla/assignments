import React from 'react';
import BlogList from './BlogList';

function Posts(props){
    return(
     <div className="posts-container">
        <h1 className="titles">{props.post.title}</h1>
        <h2 className="subtitles">{props.post.subtitle}</h2>
        <h5 className="author"><a href="#" alt="start bootstrap">{props.post.author}</a> {props.post.date}</h5>
       
        <hr/>
        <br/>
    </div>
    )
};
export default Posts;