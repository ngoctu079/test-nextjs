import { fetchData } from "../../utils/axios";

export default function AboutPage(props) {
  const { posts } = props;

  return (
    <div>
      <div>List Posts</div>
      {posts.map((value, index) => (
        <div key={value.id}>
          <span>ID: {value.id}|</span>
          <span>Name: {value.name}</span>
          <hr />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await fetchData.get("/posts");

  // Pass data to the page via props
  return { props: { posts: data } };
}
