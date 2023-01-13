import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const goToDetailPage = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 123,
        ref: "social",
      },
    });
  };

  return (
    <>
      <Link href="/about">
        <div>Go to about</div>
      </Link>

      <button onClick={goToDetailPage}>Go to Detail</button>

      <div>HOME</div>
    </>
  );
}
