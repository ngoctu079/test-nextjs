import { getAllposts, getPostById } from "../../../service/posts";

export default function handler(req, res) {
  const postId = req.query.postId;
  const method = req.method;

  const post = getPostById(postId);

  switch (method) {
    case "GET":
      res.status(200).json(post);
      break;

    case "DELETE":
      break;

    case "POST":
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
