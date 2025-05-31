import { Router } from 'express';
import postController from '../controllers/postController.js';

const routePost = Router();
console.log('Route post initialized');

routePost.get('/posts', postController.getPosts);
routePost.get('/posts/:id', postController.getPostById);

export default routePost;
// This file defines the routes for fetching posts and a specific post by ID.