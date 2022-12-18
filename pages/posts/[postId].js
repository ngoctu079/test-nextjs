import { useRouter } from "next/router";

export default function PostDetailPage(props) {
  const router = useRouter();
  console.log({ props });

  return <div>Post detail {JSON.stringify(router.query)}</div>;
}

export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return { props: { tutest: "abcd" } };
}
