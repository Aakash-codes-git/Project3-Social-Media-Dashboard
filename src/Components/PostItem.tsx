import React from 'react';
import { PostItemProps } from '../Interfaces/utils';


const PostItem: React.FC<PostItemProps> = ({ post, editPost, deletePost }) => {
    const handleEdit = () => {
      editPost(post.id);
    };
  
    const handleDelete = () => {
      deletePost(post.id);
    };
  
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>Date: {post.date}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default PostItem;