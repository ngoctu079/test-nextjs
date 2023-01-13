import { Layout1, Layout2 } from "../../components/layout";

export default function TestLayoutPage(props) {
  return <div>Post List Page</div>;
}

TestLayoutPage.getLayout = function getLayout(page) {
  return (
    <Layout2>
      <TestLayoutPage />
    </Layout2>
  );
};
