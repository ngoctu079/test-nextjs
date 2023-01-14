import { useRouter } from "next/router";
import { fetchData } from "../../utils/axios";
import { Button, Checkbox, Form, Input } from "antd";

export default function CreatePostPage() {
  const router = useRouter();
  const onFinish = (values) => {
    fetchData.post("/posts/create", values).then((res) => {
      router.push({
        pathname: "/posts",
      });
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
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
