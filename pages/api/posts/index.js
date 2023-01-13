import { getAllposts, getPostById } from "../../../service/posts";

export default function handler(req, res) {
  const method = req.method;

  const posts = getAllposts();

  switch (method) {
    case "GET":
      res.status(200).json(posts);
      break;

    case "DELETE":
      break;

    case "POST":
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
