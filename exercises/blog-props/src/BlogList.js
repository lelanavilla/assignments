import React from 'react';
import BlogData from './blogposts.json';
import Posts from './Posts';


function BlogList(){
    const  blogpostsObj = BlogData
    .map(blogpostsObj => 
    <Posts
    key={blogpostsObj.title} 
    post = {blogpostsObj}
    title ={blogpostsObj.title}
    author={blogpostsObj.author}
 />

    )
    return(
        <div>
        {blogpostsObj}
    
    </div>)
};
export default BlogList;
