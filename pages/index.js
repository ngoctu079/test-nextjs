import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

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
      <Head>
        <title>
          NGỌC TÚ 1712858 NGỌC TÚ 1712858 NGỌC TÚ 1712858 NGỌC TÚ 1712858 NGỌC
          TÚ 1712858 NGỌC TÚ 1712858
        </title>

        <meta
          name="keywords"
          content="NGỌC TÚ 1712858 NGỌC TÚ 1712858 NGỌC TÚ 1712858"
        />
      </Head>
      <h1>NGỌC TÚ 1712858</h1>
      Sinh viên chủ yếu là những người đăng ký vào trường hoặc cơ sở giáo dục
      khác tham gia các lớp học trong khóa học để đạt được mức độ thành thạo môn
      học theo hướng dẫn của người hướng dẫn, và dành thời gian bên ngoài lớp để
      thực hiện bất kỳ hoạt động nào mà giảng viên chỉ định là cần thiết cho
      việc chuẩn bị lớp học hoặc để gửi bằng chứng về sự tiến bộ đối với sự
      thành thạo đó. Theo nghĩa rộng hơn, sinh viên là bất kỳ ai đăng ký chính
      mình để được tham gia các khóa học trí tuệ chuyên sâu với một số chủ đề
      cần thiết để làm chủ nó như là một phần của một số vấn đề ngoài thực tế
      trong đó việc làm chủ các kiến thức như vậy đóng vai trò cơ bản hoặc quyết
      định. Tại Vương quốc Anh và Ấn Độ, thuật ngữ "sinh viên" dành cho những
      người đăng ký vào các trường trung học trở lên (ví dụ: cao đẳng hoặc đại
      học); những người ghi danh vào trường tiểu học/trung học được gọi là "học
      sinh."
      <h1>NGỌC TÚ 1712858</h1>
      <Link href="/posts">View all post</Link>
      <br />
      <button onClick={goToDetailPage}>Go to Detail</button>
    </>
  );
}
