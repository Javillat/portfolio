
import PostCard from "./PostCard";

const PostList = ({ posts }) => {


    if (!posts || posts.length === 0) {
        return <div className="post-list">Loading posts...</div>;
    }

    return (
        <>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </>
    );
}

export default PostList;
// This component is used to display a list of post cards in the blog section.