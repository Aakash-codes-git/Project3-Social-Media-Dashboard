import React from 'react';
import PostItem from './PostItem';
import { PostListProps } from '../Interfaces/utils';

const PostList: React.FC<PostListProps> = ({ posts, editPost, deletePost }) => {
    return (
      <div>
        <h2>Posts</h2>
        {posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            editPost={editPost}
            deletePost={deletePost}
          />
        ))}
      </div>
    );
  };
  
  export default PostList;