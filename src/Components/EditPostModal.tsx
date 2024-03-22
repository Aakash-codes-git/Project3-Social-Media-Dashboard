import React, { useState } from 'react';

import { EditPostModalProps } from '../Interfaces/utils';

const EditPostModal: React.FC<EditPostModalProps> = ({ post, editPost, closeModal }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!title || !content) return;
      editPost(post.id, { title, content });
      closeModal();
    };
  
    return (
      <div>
        <h2>Edit Post</h2>
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
          <button type="submit">Save Changes</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </div>
    );
  };
  
  export default EditPostModal;