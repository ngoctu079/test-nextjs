export default function AboutPage(props) {
  console.log({ props });
  return <div>Post List Page</div>;
}

export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return { props: { tutest: "abcd" } };
}
