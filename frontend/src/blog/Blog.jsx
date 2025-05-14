
import React from 'react';
import '../styles/global.css';
import '../styles/blog.css';

const Blog = () => { 
    console.log("Blog component loaded");
    // alert("Blog component loaded");
    
  return (
    <section className="blog">
      <h1>Blog</h1>
      <p>Bienvenido al blog!</p>
    </section>
  );
}

export default Blog;