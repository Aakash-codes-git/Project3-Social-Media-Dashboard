import React, { useState } from 'react';
import PostList from './Components/PostList'
import CreatePostForm from './Components/CreatePostForm';
import { Post } from './Interfaces/utils';


const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Function to add new post
  const addPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  // Function to edit existing post
  const editPost = (postId: number, updatedPost: Partial<Post>) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, ...updatedPost } : post
    );
    setPosts(updatedPosts);
  };

  // Function to delete post
  const deletePost = (postId: number) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Social Media Dashboard</h1>
      <CreatePostForm addPost={addPost} />
      <PostList
        posts={posts}
        editPost={editPost}
        deletePost={deletePost}
      />
    </div>
  );
};

export default App;
