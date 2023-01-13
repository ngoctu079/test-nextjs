import { posts } from "../data";

export const getAllposts = () => {
  return posts;
};

export const getPostById = (postId) => {
  const post = posts.filter((post) => post.id == postId);

  return post;
};

export const addPost = (post) => {
  return post;
};
