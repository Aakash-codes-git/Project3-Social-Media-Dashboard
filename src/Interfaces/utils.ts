export interface Post {
    id: number;
    title: string;
    content: string;
    date:string;
  }
  
  export interface EditPostModalProps {
    post: Post;
    editPost: (postId: number, updatedPost: Partial<Post>) => void;
    closeModal: () => void;
  }

  export interface CreatePostFormProps {
    addPost: (newPost: { title: string; content: string }) => void;
  }

  export interface PostItemProps{
    post: Post;
    editPost: (postId: number) => void;
    deletePost: (postID: number) => void;
  }

  export interface PostListProps{
    posts: Post[];
    editPost: (postId: number, updatedPost: Partial<Post>) => void;
    deletePost: (postId: number) => void;
  }