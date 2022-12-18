import { useRouter } from "next/router";

export default function PostDetailPage() {
  const router = useRouter();

  return <div>Post detail {JSON.stringify(router.query)}</div>;
}
