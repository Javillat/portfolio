import React, { memo, useState } from 'react';
import PostList from '../components/PostList';
import { Tags } from '../components/Tags';
import { useFetch } from '../hooks/useFetch';
import '../../styles/global.css';
import '../../styles/blog.css';


const API_URL = process.env.REACT_APP_API_POST_URL || 'http://localhost:3001/api/v1/blog/posts';

// Usamos memo para evitar rerenders innecesarios
const Blog = memo(() => {
    const [posts, setPosts] = useState([]);

    const { data: getPosts, error } = useFetch(API_URL);

    React.useEffect(() => {
        if (Array.isArray(getPosts) && getPosts.length > 0) {
            setPosts(getPosts);
        }
    }, [getPosts]);

    if (error) {
        console.error('Error fetching posts:', error);
        return <div>Error loading posts.</div>;
    }

    return (
        <div className="blog">
            <div className='blog-header'>
                <h1>Javier's - Blog</h1>
                <h2>Welcome to my blog! Here, I share my thoughts, experiences and ideas, related to web bussines topics. Stay tuned for updates!</h2>
                <Tags />
            </div>
            <div className='blog-content'>
                <PostList posts={posts} />
            </div>
        </div>
    );
});

export default Blog;