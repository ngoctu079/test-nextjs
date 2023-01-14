import { posts } from "../data";
import { v4 as uuidv4 } from "uuid";

export const getAllposts = () => {
  return posts;
};

export const getPostById = (postId) => {
  const post = posts.filter((post) => post.id == postId);

  return post;
};

export const addPost = (post) => {
  const id = uuidv4();

  post = { id, ...post };

  posts.push(post);

  return post;
};
