import sequelize from '../dbpool.js'; 

const Posts = sequelize.models.Posts; 
// This file defines the controller for handling blog post-related requests.
const getPosts = async (req, res) => {
    console.log(Posts);
    
    console.log('Fetching latest 10 posts'); 
    try {
        const posts = await Posts.findAll({
            where: {
                status: 'published'
            },
            attributes: ['title', 'content', 'slug', 'image_url', 'excerpt'],
            order: [['createdAt', 'DESC']],
            limit: 10,
        })
        if (!posts || posts.length === 0) {
            console.log('No posts found');
            return res.status(404).json({ error: 'No posts found' });
        }
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id)
            .populate('title content slug image_url excerpt')
            
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default {
    getPosts,
    getPostById
};