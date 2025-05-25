import React, { memo } from 'react';
import { Tags } from '../components/Tags';
import '../../styles/global.css';
import '../../styles/blog.css';

// Usamos memo para evitar rerenders innecesarios
const Blog = memo(() => {
    return (
        <div className="blog">
            <div className='blog-header'>
                <h1>Javier's - Blog</h1>
                <h2>Welcome to my blog! Here, I share my thoughts, experiences, and insights on various topics. Stay tuned for updates!</h2>
                <Tags />
            </div>
            <div className='blog-content'>
                {/* Aquí puedes agregar el contenido del blog */}
            </div>
        </div>
    );
});

export default Blog;