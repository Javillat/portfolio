
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {

    return (
        <div className="post-card">
            <div className="post-image">
                <Link to={`/blog/${post.id}`} className="post-link">
                    <img
                        src={post.image_url}
                        alt={post.title}
                        className="post-image"
                        onError={(e) => {
                            e.target.onerror = null; // Prevents infinite loop
                            e.target.src = "https://placehold.co/50x40"; // Fallback image
                        }}
                        loading="lazy"
                    />
                </Link>
            </div>
            <div className="post-details">
                <div className="post-details__tags-date-views">
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span> | <span>{post.category}</span>
                </div>
                <div className="post-details__title-excerpt">
                    <div className="post-details__title-excerpt__title">
                        <Link to={`/blog/${post.id}`} className="post-link-body">
                            <h2>{post.title}</h2>
                        </Link>
                    </div>
                    <div className="post-details__title-excerpt__excerpt">
                        <Link to={`/blog/${post.id}`} className="post-link-body">
                            <p>{post.excerpt.substring(0, 100)}...</p>
                        </Link>
                    </div>
                </div>
                <div className="post-details__author">
                    <span>{post.author_id}</span>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
// This component is used to display a single post card in the blog section.

