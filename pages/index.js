import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const goToDetailPage = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 1,
        ref: "social",
      },
    });
  };

  return (
    <>
      <title>NGỌC TÚ 1712858 NGỌC TÚ 1712858 NGỌC TÚ 1712858</title>

      <meta
        name="keywords"
        content="NGỌC TÚ 1712858 NGỌC TÚ 1712858 NGỌC TÚ 1712858"
      />
      <h1>NGỌC TÚ 1712858</h1>
      <Link href="/posts">View all post</Link>
      <br />
      <button onClick={goToDetailPage}>Go to Detail</button>
    </>
  );
}
