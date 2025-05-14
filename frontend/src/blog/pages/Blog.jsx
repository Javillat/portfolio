
import React from 'react';
import '../styles/global.css';
import '../styles/blog.css';

const Blog = () => {
    console.log("Blog component loaded");
    // alert("Blog component loaded");

    return (
        <div className="blog">
            <div className='blog-header'>
                <h1>Javier's - Blog</h1>
                <p> Optimización web</p>
            </div>
            <div className='blog-content'>

            </div>
        </div>
    );
}

export default Blog;