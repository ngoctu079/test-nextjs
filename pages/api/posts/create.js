import { addPost } from "../../../service/posts";

export default function handler(req, res) {
  const post = req.body;
  const method = req.method;

  switch (method) {
    case "GET":
      break;

    case "DELETE":
      break;

    case "POST":
      const response = addPost(post);
      res.status(200).json(response);
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
