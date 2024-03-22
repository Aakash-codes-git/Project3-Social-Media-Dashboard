import React, { useState } from 'react';
import {CreatePostFormProps} from '../Interfaces/utils'


const CreatePostForm: React.FC<CreatePostFormProps> = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!title || !content) return;
      addPost({ title, content });
      setTitle('');
      setContent('');
    };
  
    return (
      <div>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default CreatePostForm;