import sequelize from '../dbpool.js';

const Posts = sequelize.models.Posts;
const Categories = sequelize.models.Categories;
// This file defines the controller for handling blog post-related requests.
const getPosts = async (req, res) => {
    console.log('Modelo:', Posts);

    console.log('Fetching latest 10 posts');
    try {
        const posts = await Posts.findAll({
            where: {
                status: 'published'
            },
            attributes: ['title', 'slug', 'image_url', 'excerpt', 'author_id', 'views', 'createdAt'],
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
        const post = await Posts.findById(id)

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createPost = async (req, res) => {
    
    const { title, content, slug, image_url, excerpt, author_id, views, status, is_featured } = req.body;
    if (!title || !content || !slug || !image_url || !excerpt || !author_id) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    console.log('Creating a new post:', { title, content, slug, image_url, excerpt, author_id });
    // Validate the slug to ensure it is unique
    const existingPost = await Posts.findOne({ where: { slug } });
    if (existingPost) {
        return res.status(400).json({ error: 'Slug must be unique' });
    }

    const newPost = {
        title,
        content,
        slug,
        image_url,
        excerpt,
        author_id,
        views: views || 0,
        status: status || 'draft',
        is_featured: is_featured || false
    };

    console.log('Creating post in the database');

    try {
        const createPost = await Posts.create(newPost);
        res.status(201).json(createPost);
    }
    catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getPostByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const posts = await Posts.findAll({
            include: [
                {
                    model: Categories,
                    as: 'category',
                    where:{ id: category },
                    attributes: [],
                    through: { attributes: [] }
                }
            ],
            where: {
                status: 'published'
            },
            attributes: ['title', 'slug', 'image_url', 'excerpt', 'author_id', 'views', 'createdAt'],
            order: [['createdAt', 'DESC']],
        });

        if (!posts || posts.length === 0) {
            return res.status(404).json({ error: 'No posts found for this category' });
        }
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts by category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default {
    getPosts,
    getPostById,
    getPostByCategory,
    createPost
};