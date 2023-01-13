import { useRouter } from "next/router";
import { fetchData } from "../../utils/axios";

export default function PostDetailPage(props) {
  return (
    <div>
      <div>ID: {props?.post?.id}</div>
      <div>Name: {props?.post?.name}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const postId = context.query.postId;
  const { data } = await fetchData.get("/posts/" + postId);

  // Pass data to the page via props
  return {
    props: {
      post: data?.[0] || {},
    },
  };
}
